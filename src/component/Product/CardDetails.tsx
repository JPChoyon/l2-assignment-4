import { useParams, useNavigate } from "react-router-dom";
import { useGetCarByIdQuery } from "../../redux/feature/car/carApi";
import {  useDispatch } from "react-redux";
import { useState } from "react";
import toast from "react-hot-toast";
import { addToCart } from "../../redux/feature/cart/cartSlice";

const CarDetails = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetCarByIdQuery(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error loading car details.</p>;

  const car = data?.data;
  const totalPrice = car.price * quantity;

  const handleAddToCart = () => {
    const cartItem = {
      carId: car._id,
      brand: car.brand,
      model: car.model,
      price: car.price,
      quantity,
      totalPrice,
    };

    // Dispatch to add car to the cart
    dispatch(addToCart(cartItem));

    // Show success toast
    toast.success("Added to cart!");

    // Redirect to cart page
    navigate("/cart");
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
              <button className="btn btn-primary" onClick={handleAddToCart}>
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetails;
