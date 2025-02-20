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
        <div className="flex flex-wrap -m-4 justify-center">
          {cars?.slice(0, 3).map((car: any) => (
            <div key={car.id} className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt={car.name}
                />
                <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">
                  {car.brand}
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  {car.name}
                </h2>
                <p className="leading-relaxed text-base">{car.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopFeatureCar;
