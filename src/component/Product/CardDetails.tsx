import { useParams, useNavigate } from "react-router-dom";
import { useGetCarByIdQuery } from "../../redux/feature/car/carApi";
import { useDispatch } from "react-redux";
import { useState } from "react";
import toast from "react-hot-toast";
import { addToCart } from "../../redux/feature/cart/cartSlice";
import { motion } from "framer-motion";

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

    dispatch(addToCart(cartItem));
    toast.success("Added to cart!");
    navigate("/cart");
  };

  return (
    <motion.section
      className="text-gray-600 body-font"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container px-5 py-24 mx-auto">
        <motion.div
          className="flex flex-col items-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.img
            src={car.image}
            alt={car.brand}
            className="w-96 h-60 object-cover rounded-lg"
            whileHover={{ scale: 1.05 }}
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
              <motion.button
                className="btn btn-disabled"
                whileTap={{ scale: 0.9 }}
              >
                Out of stock
              </motion.button>
            ) : (
              <motion.button
                className="btn btn-primary"
                onClick={handleAddToCart}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Add to Cart
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CarDetails;
