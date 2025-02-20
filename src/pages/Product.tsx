import toast from "react-hot-toast";
import { useGetAllCarQuery } from "../redux/feature/car/carApi";

const Product = () => {
  const { data, error, isLoading } = useGetAllCarQuery(undefined);
  if (isLoading) return <p>Loading...</p>;
  if (error) return toast.error("An error in data fetching");
  const cars = data.data;
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 justify-center">
          {cars?.map((car: any) => (
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

export default Product;
