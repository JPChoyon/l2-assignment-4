import { useGetAllCarQuery } from "../redux/feature/car/carApi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Product = () => {
  const { data, error, isLoading } = useGetAllCarQuery(undefined);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error loading data.</p>;

  const cars = data?.data || [];

  return (
    <motion.section
      className="text-gray-600 body-font"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="font-bold text-center text-4xl -mb-10 text-[rgb(246,114,128)]"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        All Product
      </motion.h1>

      <div className="container px-5 py-24 mx-auto">
        <motion.div
          className="flex flex-wrap -m-4 justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {cars.map((car: any, index: number) => (
            <motion.div
              key={car._id}
              className="card bg-base-100 w-96 shadow-xl"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <figure className="px-10 pt-10">
                <motion.img
                  src={car?.image}
                  alt={car.brand}
                  className="rounded-xl"
                  whileHover={{ scale: 1.1 }}
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{car.brand}</h2>
                <h2 className="card-title text-xs">{car.model}</h2>
                <p>{car.description}</p>
                <div className="card-actions">
                  <Link to={`/product/${car._id}`}>
                    <motion.button
                      className="btn uppercase lg:mt-8 text-white btn-primary hover:bg-[#f03f50] bg-[rgb(246,114,128)] border-none"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      See Details
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Product;
