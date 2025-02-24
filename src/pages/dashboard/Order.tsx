import { useGetAllOrderQuery } from "@/redux/feature/order/orderApi";
import { toast } from "react-hot-toast";
import { format } from "date-fns";

interface Order {
  _id: string;
  createdAt: string;
  status: string;
  totalPrice: number;
}

const Order: React.FC = () => {
  const { data, isLoading, isError, error } = useGetAllOrderQuery({});

  const order = data?.data;
  console.log(order);

  if (isLoading) {
    return <div className="text-center p-4">Loading orders...</div>;
  }

  if (isError) {
    toast.error(`Error fetching orders: ${(error as any)?.message}`);
    return <div className="text-center p-4">Error loading orders</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">All Orders</h2>

      {/* Check if no orders found */}
      {order && order.length === 0 ? (
        <p>No orders found</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Order ID</th>
                <th className="px-4 py-2 text-left">Created At</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Total Price</th>
              </tr>
            </thead>
            <tbody>
              {order?.map((order: Order) => (
                <tr key={order._id}>
                  <td className="px-4 py-2">{order._id}</td>
                  <td className="px-4 py-2">
                    {format(new Date(order.createdAt), "MM/dd/yyyy hh:mm a")}
                  </td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded-full ${
                        order.status === "Completed"
                          ? "bg-green-500"
                          : "bg-yellow-500"
                      } text-white`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">${order.totalPrice.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Order;
