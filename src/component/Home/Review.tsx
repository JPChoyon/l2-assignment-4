import { motion } from "framer-motion";

const Review = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container py-24">
        <motion.h2
          className="text-center text-3xl font-bold tracking-tight text-red-500 sm:text-4xl"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Reviews from our happy customers
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          {[
            {
              name: "Jared Smith",
              role: "Tesla 3 Buyer",
              img: "https://images.unsplash.com/photo-1527082395-e939b847da0d?auto=format&fit=crop&w=1180&q=80",
              review:
                "The Tesla Model 3 is an absolute game-changer in the EV space. With its impressive range, rapid acceleration, and cutting-edge autopilot system, it's a joy to drive...",
            },
            {
              name: "Samantha Lee",
              role: "Toyota RAV4 Hybrid (2024) Buyer",
              img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
              review:
                "Toyota has nailed the balance between fuel efficiency and performance with the RAV4 Hybrid. It’s spacious, comfortable, and offers a smooth ride...",
            },
            {
              name: "Michael Brown",
              role: "BMW M3 Competition (2024) Buyer",
              img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
              review:
                "The BMW M3 Competition is a beast on the road. With a 503-hp twin-turbo inline-six engine, it delivers an adrenaline-pumping experience...",
            },
          ].map((review, index) => (
            <motion.blockquote
              key={index}
              className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-4">
                <motion.img
                  alt={review.name}
                  src={review.img}
                  className="h-14 w-14 rounded-full object-cover"
                  whileHover={{ scale: 1.1 }}
                />
                <div>
                  <p className="text-lg font-medium">{review.name}</p>
                  <p className="mt-1 text-sm text-red-500">{review.role}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">{review.review}</p>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Review;
