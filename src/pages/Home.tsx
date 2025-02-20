import Banner from "../component/Home/Banner";
import Contact from "../component/Home/Contact";
import Review from "../component/Home/Review";
import TopFeatureCar from "../component/Home/TopFeatureCar";

const Home = () => {
  return (
    <div>
      <Banner />
      <TopFeatureCar />
      <Review />
      <Contact/>
    </div>
  );
};

export default Home;
