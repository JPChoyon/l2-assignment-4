import { useCreateCarMutation } from "@/redux/feature/car/carApi";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

// Component for creating a car
const CreateCarForm = () => {
  const [createCar, { isLoading, error }] = useCreateCarMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    const updatedData = {
      ...data,
      year: Number(data.year),
      price: Number(data.price),
      quantity: Number(data.quantity),
      inStock:true
    };

    try {
      await createCar(updatedData).unwrap();
      toast.success("Car created successfully!");
      reset();
    } catch (err) {
      toast.error("Error creating car! Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Create a New Car</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Brand Input */}
        <div>
          <label className="block">Brand</label>
          <select
            {...register("brand", { required: "Brand is required" })}
            className="select select-bordered w-full"
          >
            <option value="Toyota">Toyota</option>
            <option value="BMW">BMW</option>
            <option value="Ford">Ford</option>
          </select>
          {errors.brand && (
            <p className="text-red-500 mt-1">
              {typeof errors.brand?.message === "string"
                ? errors.brand.message
                : ""}
            </p>
          )}
        </div>

        {/* Model Input */}
        <div>
          <label className="block">Model</label>
          <select
            {...register("model", { required: "Model is required" })}
            className="select select-bordered w-full"
          >
            <option value="Camry">Camry</option>
            <option value="3 Series">3 Series</option>
            <option value="Focus">Focus</option>
          </select>
          {errors.model && (
            <p className="text-red-500 mt-1">
              {typeof errors.model?.message === "string"
                ? errors.model.message
                : ""}
            </p>
          )}
        </div>

        {/* Image Input */}
        <div>
          <label className="block">Image URL</label>
          <input
            {...register("image", { required: "Image is required" })}
            className="input input-bordered w-full"
            type="text"
            placeholder="Enter image URL"
          />
          {errors.image && (
            <p className="text-red-500 mt-1">
              {typeof errors.image?.message === "string"
                ? errors.image.message
                : ""}
            </p>
          )}
        </div>

        {/* Year Input */}
        <div>
          <label className="block">Year</label>
          <input
            {...register("year", { required: "Year is required" })}
            className="input input-bordered w-full"
            type="number"
            placeholder="Enter car year"
          />
          {errors.year && (
            <p className="text-red-500 mt-1">
              {typeof errors.year?.message === "string"
                ? errors.year.message
                : ""}
            </p>
          )}
        </div>

        {/* Price Input */}
        <div>
          <label className="block">Price</label>
          <input
            {...register("price", { required: "Price is required" })}
            className="input input-bordered w-full"
            type="number"
            placeholder="Enter car price"
          />
          {errors.price && (
            <p className="text-red-500 mt-1">
              {typeof errors.price?.message === "string"
                ? errors.price.message
                : ""}
            </p>
          )}
        </div>

        {/* Category Input */}
        <div>
          <label className="block">Category</label>
          <select
            {...register("category", { required: "Category is required" })}
            className="select select-bordered w-full"
          >
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Truck">Truck</option>
            <option value="Coupe">Coupe</option>
            <option value="Convertible">Convertible</option>
          </select>
          {errors.category && (
            <p className="text-red-500 mt-1">
              {typeof errors.category?.message === "string"
                ? errors.category.message
                : ""}
            </p>
          )}
        </div>

        {/* Description Input */}
        <div>
          <label className="block">Description</label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            className="textarea textarea-bordered w-full"
            placeholder="Enter a brief description of the car"
          />
          {errors.description && (
            <p className="text-red-500 mt-1">
              {typeof errors.description?.message === "string"
                ? errors.description.message
                : ""}
            </p>
          )}
        </div>

        {/* Quantity Input */}
        <div>
          <label className="block">Quantity</label>
          <input
            {...register("quantity", { required: "Quantity is required" })}
            className="input input-bordered w-full"
            type="number"
            placeholder="Enter the quantity"
          />
          {errors.quantity && (
            <p className="text-red-500 mt-1">
              {typeof errors.quantity?.message === "string"
                ? errors.quantity.message
                : ""}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={isLoading}
        >
          {isLoading ? "Creating..." : "Create Car"}
        </button>
      </form>

      {/* Error Toast */}
      {error && toast.error("Error creating car! Please try again.")}
    </div>
  );
};

export default CreateCarForm;
