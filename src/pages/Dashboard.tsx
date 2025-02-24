import { Outlet, Link } from "react-router-dom"; // Import Outlet for nested routes

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      {/* Sidebar Navigation */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <li>
            <Link to="/dashboard/create-car">Create Car</Link>
          </li>
          <li>
            <Link to="/dashboard/orders">Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/products">Products</Link>
          </li>
        </ul>
      </div>

      <div className="drawer-content flex flex-col items-center p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
