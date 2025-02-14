import { useForm } from "react-hook-form";
import { FaLock, FaUser } from "react-icons/fa6";
import { useLoginMutation } from "../redux/feature/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { setUser } from "../redux/feature/auth/authSlice";
import verifyToken from "../utils/verifyToken";

const Login = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();
  const [login, { data, error }] = useLoginMutation();
  console.log(data, error);
  const onsubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    const res = await login(userInfo).unwrap();
    dispatch(setUser({ user: {}, token: res.data.token }));
    const user = verifyToken(res.data.token);
    console.log(user);
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
      </div>
    </div>
  );
};

export default Login;
