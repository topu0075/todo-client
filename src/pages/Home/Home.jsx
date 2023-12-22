import Banner from "./Components/Banner/Banner";
import Intro from "./Components/Intro/Intro";

const Home = () => {
  return (
    <div className='flex flex-col'>
      <div className='mt-10 md:mt-14'>
        <Banner></Banner>
      </div>
      <div className='mt-10 md:mt-14'>
        <Intro></Intro>
      </div>
    </div>
  );
};

export default Home;
