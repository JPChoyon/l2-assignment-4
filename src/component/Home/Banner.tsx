import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960)",
      }}
    >
      <div className="hero-overlay bg-[#D51820] bg-opacity-10"></div>
      <div className="hero-content text-neutral-content text-center">
        <motion.div
          className="max-w-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-5 text-5xl font-bold">Welcome To Car Store</h1>

          <NavLink to="/product">
            <motion.button
              className="btn uppercase lg:mt-8 btn-primary hover:bg-[#f03f50] bg-[rgb(246,114,128)] border-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              View All Car
            </motion.button>
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
