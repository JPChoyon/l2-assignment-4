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
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome To Car Store</h1>

          <button className="btn uppercase lg:mt-8 btn-primary bg-[rgb(246,114,128)] border-none">
            View All Car
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
