import toast from "react-hot-toast";
import { useGetAllCarQuery } from "../../redux/feature/car/carApi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const TopFeatureCar = () => {
  const { data, error, isLoading } = useGetAllCarQuery(undefined);

  if (isLoading) return <p>Loading...</p>;
  if (error) return toast.error("An error in data fetching");

  const cars = data?.data;

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <motion.div
          className="flex flex-wrap w-full mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Top Sold Product
            </h1>
            <div className="h-1 w-20 bg-red-500 rounded" />
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            These are the most attractive and feature-rich products. People love
            them, making them top sellers.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-4 -m-4 justify-center">
          {cars?.slice(0, 3).map((car: any, index: number) => (
            <motion.div
              key={car._id}
              className="card bg-base-100 w-96 shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <figure className="px-10 pt-10">
                <motion.img
                  src={car?.image}
                  alt={car?.model}
                  className="rounded-xl"
                  whileHover={{ scale: 1.1 }}
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{car.brand}</h2>
                <h2 className="card-title text-xs">{car.model}</h2>
                <p>{car?.description}</p>
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
        </div>
      </div>
    </section>
  );
};

export default TopFeatureCar;
