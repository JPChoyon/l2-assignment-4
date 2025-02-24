import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Us
      </motion.h1>

      <motion.p
        className="text-lg text-gray-700 text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Welcome to <span className="font-semibold">AutoLux</span>, your trusted
        destination for premium cars. We are dedicated to providing top-quality
        vehicles with exceptional customer service.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          className="bg-white shadow-lg rounded-xl p-6"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            At AutoLux, we aim to revolutionize the car-buying experience by
            offering a seamless and trustworthy platform. Whether you are
            looking for a brand-new car or a certified pre-owned vehicle, we
            ensure quality and reliability in every purchase.
          </p>
        </motion.div>

        <motion.div
          className="bg-white shadow-lg rounded-xl p-6"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Wide selection of top-brand cars</li>
            <li>Certified pre-owned vehicles</li>
            <li>Flexible financing options</li>
            <li>Exceptional customer support</li>
            <li>Fast and secure transactions</li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Visit Us</h2>
        <p className="text-gray-600">123 AutoLux Avenue, Car City, TX 75001</p>
        <p className="text-gray-600">Call us: (123) 456-7890</p>
        <p className="text-gray-600">Email: support@autolux.com</p>
      </motion.div>
    </div>
  );
};

export default About;
