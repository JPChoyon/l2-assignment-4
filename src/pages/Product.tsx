import { useGetAllCarQuery } from "../redux/feature/car/carApi";
import { Link } from "react-router-dom";

const Product = () => {
  const { data, error, isLoading } = useGetAllCarQuery(undefined);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error loading data.</p>;

  const cars = data?.data || [];

  return (
    <section className="text-gray-600 body-font">
      <h1 className="font-bold text-center text-4xl -mb-10 text-[rgb(246,114,128)]">
        All Product
      </h1>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 justify-center gap-4">
          {cars.map((car: any) => (
            <div key={car._id} className="card bg-base-100 w-96 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={car?.image} alt={car.brand} className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{car.brand}</h2>
                <h2 className="card-title text-xs">{car.model}</h2>
                <p>{car.description}</p>
                <div className="card-actions">
                  <Link to={`/product/${car._id}`}>
                    <button className="btn uppercase lg:mt-8 text-white btn-primary hover:bg-[#f03f50] bg-[rgb(246,114,128)] border-none">
                      See Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
