import { useForm } from "react-hook-form";
import { FaLock, FaUser } from "react-icons/fa6";
import { useLoginMutation } from "../redux/feature/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { setUser } from "../redux/feature/auth/authSlice";
import verifyToken from "../utils/verifyToken";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const onsubmit = async (data: any) => {
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const userData = verifyToken(res.data.token);
      dispatch(setUser({ user: userData, token: res.data.token }));
      toast.success("User logged in successfully");
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      if (error) {
        toast.error("Incorrect email or password");
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div>
      <div className="max-w-md mx-auto bg-[rgb(246,114,128)] p-10 rounded-xl mt-4">
        <h1 className="text-4xl font-bold text-center mb-5 text-white">
          Log In
        </h1>
        <form onSubmit={handleSubmit(onsubmit)}>
          <div>
            <label className="input input-bordered flex items-center gap-2">
              <FaUser />
              <input
                type="text"
                className="grow"
                placeholder="Email"
                {...register("email")}
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
                {...register("password")}
              />
            </label>
          </div>
          <button type="submit" className="btn btn-block hover:bg-[#e9bfc3] ">
            Login
          </button>
        </form>
        <Link to="/register">
          <button className="btn btn-block mt-4 hover:bg-[#e9bfc3] ">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
