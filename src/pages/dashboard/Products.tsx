import React from "react";
import { useGetAllCarQuery } from "@/redux/feature/car/carApi";
import { toast } from "react-hot-toast";

interface Car {
  _id: string;
  brand: string;
  model: string;
  price: number;
  year: number;
  image: string;
  category: string;
  description: string;
}

const Products: React.FC = () => {
  const { data, isLoading, isError, error } = useGetAllCarQuery({});
  const product = data?.data

  if (isLoading) {
    return <div className="text-center p-4">Loading products...</div>;
  }

  if (isError) {
    toast.error(`Error fetching products: ${(error as any)?.message}`);
    return <div className="text-center p-4">Error loading products</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">All Products</h2>

      {/* Check if no products found */}
      {product && product === 0 ? (
        <p>No products found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {product?.map((car: Car) => (
            <div key={car._id} className="border rounded-lg p-4 shadow-lg">
              <img
                src={car.image}
                alt={car.model}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{`${car.brand} ${car.model}`}</h3>
              <p className="text-gray-500 mb-2">{car.category}</p>
              <p className="text-gray-700 mb-4">{car.description}</p>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-lg">
                  ${car.price.toFixed(2)}
                </span>
                <span className="text-sm text-gray-400">{car.year}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
