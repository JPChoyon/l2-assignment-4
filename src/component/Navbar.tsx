import { FaCartPlus, FaUser } from "react-icons/fa6";
import { logout, useCurrentUser } from "../redux/feature/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(useCurrentUser);

  const navItem = [
    <>
      <li>
        <NavLink to="/" className="hover:bg-red-100 ">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="product" className="hover:bg-red-100">
          Product
        </NavLink>
      </li>
      <li>
        <NavLink to="cart" className="hover:bg-red-100">
          Cart
        </NavLink>
      </li>
      <li>
        <NavLink to="about" className="hover:bg-red-100">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="order" className="hover:bg-red-100">
          Order
        </NavLink>
      </li>
    </>,
  ];
  const hadnleLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItem}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <span className="text-[#F67280]">Car</span> Store
          </a>
        </div>
        <div className="navbar-center hidden lg:flex font-semibold">
          <ul className="menu menu-horizontal  px-1">{navItem}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-2">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost  btn-circle avatar"
              >
                <div className="w-10 rounded">
                  {/* <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  /> */}
                  <FaUser className="text-4xl text-[#F67280]" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
              >
                {user ? (
                  <li>
                    <a className="justify-between">{user.email}</a>
                  </li>
                ) : (
                  <li>
                    <a className="justify-between">Profile</a>
                  </li>
                )}
                <li>
                  <NavLink to="cart" className="hover:bg-red-100">
                    <FaCartPlus />
                    Cart
                  </NavLink>
                </li>
                {user ? (
                  <li onClick={hadnleLogout}>
                    <a>Logout</a>
                  </li>
                ) : (
                  <li>Login</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
