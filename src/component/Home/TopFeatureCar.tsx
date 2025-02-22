import toast from "react-hot-toast";
import { useGetAllCarQuery } from "../../redux/feature/car/carApi";

const TopFeatureCar = () => {
  const { data, error, isLoading } = useGetAllCarQuery(undefined);
  if (isLoading) return <p>Loading...</p>;
  if (error) return toast.error("An error in data fetching");
  const cars = data.data;
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
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
        </div>
        <div className="flex flex-wrap gap-4 -m-4 justify-center">
          {cars?.slice(0, 3).map((car: any) => (
            <div key={car._id} className="card bg-base-100 w-96 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={car?.image} alt={car?.model} className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{car.brand}</h2>
                <h2 className="card-title text-xs">{car.model}</h2>
                <p>{car?.description}</p>
                <div className="card-actions">
                  <button className="btn  text-white uppercase lg:mt-8 btn-primary hover:bg-[#f03f50] bg-[rgb(246,114,128)] border-none">
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopFeatureCar;
