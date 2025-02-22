import { useParams } from "react-router-dom";
import { useGetCarByIdQuery } from "../../redux/feature/car/carApi";
import { useSelector } from "react-redux";

import { useState } from "react";
import toast from "react-hot-toast";
import { useCurrentUser } from "../../redux/feature/auth/authSlice";
import { usePlaceOrderMutation } from "../../redux/feature/order/orderApi";

const CarDetails = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetCarByIdQuery(id);
  const [placeOrder, { isLoading: isPlacingOrder }] = usePlaceOrderMutation();
  const user = useSelector(useCurrentUser);
  const [quantity, setQuantity] = useState(1);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error loading car details.</p>;

  const car = data?.data;
  const totalPrice = car.price * quantity;

  const handleOrder = async () => {
    if (!user?.email) {
      toast.error("You must be logged in to place an order.");
      return;
    }
    try {
      const orderData = {
        email: user.email,
        car: car._id,
        quantity,
        totalPrice,
      };
      console.log(orderData);
      await placeOrder(orderData);
      toast.success("Order placed successfully!");
    } catch (error) {
      toast.error("Failed to place order.");
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col items-center">
          <img
            src={car.image}
            alt={car.brand}
            className="w-96 h-60 object-cover rounded-lg"
          />
          <h2 className="text-3xl font-bold mt-5">
            {car.brand} {car.model}
          </h2>
          <p className="text-lg text-gray-600 mt-3">{car.description}</p>
          <p className="text-xl font-semibold mt-3 text-red-500">
            ${car.price}
          </p>
          <p className="text-sm text-gray-500">Year: {car.year}</p>
          <p className="text-sm text-gray-500">Category: {car.category}</p>
          <p className="text-sm text-gray-500">Stock: {car.quantity}</p>

          <div className="mt-5">
            <label className="mr-2">Quantity:</label>
            <input
              type="number"
              value={quantity}
              min="1"
              max={car.quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="border p-2 rounded w-16 text-center"
            />
          </div>

          <div className="mt-5">
            {car?.quantity === 0 ? (
              <button className="btn btn-disabled">Out of stock</button>
            ) : (
              <button
                className="btn btn-primary"
                onClick={handleOrder}
                disabled={isPlacingOrder}
              >
                {isPlacingOrder ? "Processing..." : "Buy Now"}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetails;
