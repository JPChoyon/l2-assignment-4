import { useForm } from "react-hook-form";
import { FaLock, FaUser, FaEnvelope } from "react-icons/fa6";
import { useRegisterMutation } from "../redux/feature/auth/authApi"; // Use register mutation
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const [registerUser] = useRegisterMutation(); // Changed to use register mutation
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    try {
      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
      };

      await registerUser(userInfo).unwrap();
      toast.success("User registered successfully");
      navigate("/login");
    } catch (error: any) {
      if (error?.data?.message) {
        toast.error(error.data.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <div>
      <div className="max-w-md mx-auto bg-[rgb(246,114,128)] p-10 rounded-xl mt-4">
        <h1 className="text-4xl font-bold text-center mb-5 text-white">
          Register
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="input input-bordered flex items-center gap-2">
              <FaUser />
              <input
                type="text"
                className="grow"
                placeholder="Name"
                {...register("name", { required: true })}
              />
            </label>
          </div>
          <div className="my-4">
            <label className="input input-bordered flex items-center gap-2">
              <FaEnvelope />
              <input
                type="email"
                className="grow"
                placeholder="Email"
                {...register("email", { required: true })}
              />
            </label>
          </div>
          <div className="my-4">
            <label className="input input-bordered flex items-center gap-2">
              <FaLock />
              <input
                type="password"
                className="grow"
                placeholder="Password"
                {...register("password", { required: true })}
              />
            </label>
          </div>
          <button type="submit" className="btn btn-block hover:bg-[#e9bfc3]">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
