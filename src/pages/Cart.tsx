import { useState } from "react";
import {
  useGetOrdersByUserQuery,
  useCancelOrderMutation,
} from "../redux/feature/order/orderApi";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { useCurrentUser } from "../redux/feature/auth/authSlice";

const Cart = () => {
  const user = useSelector(useCurrentUser);
  const {
    data: ordersData,
    isLoading,
    error,
  } = useGetOrdersByUserQuery(user?.email);

  const [cancelOrder] = useCancelOrderMutation();
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);
  if (isLoading) return <p>Loading orders...</p>;
  if (error) return <p className="text-red-500">Failed to fetch orders.</p>;
  const orders = ordersData?.data || [];
  const toggleSelectOrder = (orderId: string) => {
    setSelectedOrders((prevSelected) =>
      prevSelected.includes(orderId)
        ? prevSelected.filter((id) => id !== orderId)
        : [...prevSelected, orderId]
    );
  };

  const handleBuyNow = () => {
    if (selectedOrders.length === 0) {
      toast.error("Please select at least one order.");
      return;
    }
    toast.success("Proceeding to payment...");
    // Redirect to payment page or process order
  };

  const handleCancelOrder = async (orderId: string) => {
    try {
      await cancelOrder(orderId).unwrap();
      toast.success("Order canceled successfully");
      setSelectedOrders((prevSelected) =>
        prevSelected.filter((id) => id !== orderId)
      );
    } catch (err) {
      toast.error("Failed to cancel order");
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>

        {orders.length === 0 ? (
          <p className="text-center text-gray-500">No orders in cart.</p>
        ) : (
          <div className="flex flex-wrap justify-center">
            {orders.map((order: any) => (
              <div
                key={order._id}
                className="card bg-base-100 w-96 shadow-xl m-4 p-4 border"
              >
                <p>Brand: {order.car?.brand || "Unknown"}</p>
                <p>Model: {order.car?.model || "N/A"}</p>
                <p>Quantity: {order.quantity}</p>
                <p>Total Price: ${order.totalPrice}</p>
                <div className="flex items-center justify-between mt-4">
                  <input
                    type="checkbox"
                    checked={selectedOrders.includes(order._id)}
                    onChange={() => toggleSelectOrder(order._id)}
                    className="checkbox checkbox-primary"
                  />
                  <button
                    onClick={() => handleCancelOrder(order._id)}
                    className="btn btn-error btn-sm"
                  >
                    Cancel Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-6">
          <button
            onClick={handleBuyNow}
            className="btn btn-primary"
            disabled={selectedOrders.length === 0}
          >
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
