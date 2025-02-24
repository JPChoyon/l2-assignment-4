import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/feature/cart/cartSlice";
import { useCurrentUser } from "../redux/feature/auth/authSlice";
import { usePlaceOrderMutation } from "../redux/feature/order/orderApi";
import toast from "react-hot-toast";
import { RootState } from "@/redux/store";

interface CartItem {
  carId: string;
  quantity: number;
  brand: string;
  model: string;
  totalPrice: number;
}

const Cart = () => {
  const user = useSelector(useCurrentUser);
  const cartItems: CartItem[] = useSelector(
    (state: RootState) => state.cart.items
  );
  const dispatch = useDispatch();
  const [placeOrder] = usePlaceOrderMutation();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handlePayment = async () => {
    console.log(cartItems);
    const res = await placeOrder({
      email: user?.email,
      car: cartItems[0].carId,
      quantity: cartItems[0].quantity,
    });

    if (res.data?.order && res.data?.payment) {
      toast.success("Order placed successfully! Redirecting to payment page.");
      window.location.href = res.data.payment.checkout_url;
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item: CartItem) => (
              <div
                key={item.carId}
                className="flex items-center justify-between p-4 border-b"
              >
                <div>
                  <h3>
                    {item.brand} {item.model}
                  </h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total: ${item.totalPrice}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Conditionally render buttons only if cart is not empty */}
        {cartItems.length > 0 && (
          <div className="mt-6 flex gap-4 justify-center">
            <button onClick={handleClearCart} className="btn btn-secondary">
              Clear Cart
            </button>

            <button onClick={handlePayment} className="btn btn-primary">
              Proceed to Payment
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
