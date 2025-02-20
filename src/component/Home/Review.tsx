const Review = () => {
  return (
    <section>
      <div className="container py-24">
        <h2 className="text-center text-3xl font-bold tracking-tight text-red-500  sm:text-4xl">
          Reviews from our happy customers
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-4">
              <img
                alt="Customer"
                src="https://images.unsplash.com/photo-1527082395-e939b847da0d?auto=format&fit=crop&w=1180&q=80"
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <p className="text-lg font-medium">Jared Smith</p>
                <p className="mt-1 text-sm text-red-500 ">Tesla 3 Buyer</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700">
              "The Tesla Model 3 is an absolute game-changer in the EV space.
              With its impressive range, rapid acceleration, and cutting-edge
              autopilot system, it's a joy to drive. The minimalist interior and
              giant touchscreen add to the futuristic feel. However, the stiff
              suspension and lack of physical buttons might not be for everyone.
              Overall, an amazing car for tech lovers!"
            </p>
          </blockquote>
          <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-4">
              <img
                alt="Customer"
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <p className="text-lg font-medium">Samantha Lee</p>
                <p className="mt-1 text-sm text-red-500 ">
                  Toyota RAV4 Hybrid (2024) Buyer
                </p>
              </div>
            </div>
            <p className="mt-4 text-gray-700">
              "Toyota has nailed the balance between fuel efficiency and
              performance with the RAV4 Hybrid. It’s spacious, comfortable, and
              offers a smooth ride. The fuel economy is outstanding, making it
              perfect for daily commutes and road trips. Some may find the
              infotainment system a bit outdated, but it's still a solid choice
              for families and adventure seekers."
            </p>
          </blockquote>
          <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-4">
              <img
                alt="Customer"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <p className="text-lg font-medium">Michael Brown</p>
                <p className="mt-1 text-sm text-red-500">
                  BMW M3 Competition (2024) Buyer
                </p>
              </div>
            </div>
            <p className="mt-4 text-gray-700">
              "The BMW M3 Competition is a beast on the road. With a 503-hp
              twin-turbo inline-six engine, it delivers an adrenaline-pumping
              experience. The handling is razor-sharp, and the exhaust note is
              music to any car enthusiast’s ears. The only downside? It's on the
              pricier side, and rear passengers might find the space a bit
              tight. But for pure driving pleasure, it's hard to beat!"
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Review;
