import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className='hero h-96'
      style={{
        backgroundImage: "url(https://i.ibb.co/mS1mzSY/endto-End-Services.jpg)",
      }}
    >
      <div className='hero-overlay bg-opacity-50'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-3xl font-bold text-white'>
            TaskBoard brings all your tasks, teammates, and tools together
          </h1>
          <p className='mb-5 text-white'>Keep everything in the same place.</p>
          {/* <input
              className='text-black input input-bordered'
              type='text'
              placeholder='Search Meals'
              name='searchJobs'
            /> */}
          <Link to='/login' className='btn btn-primary text-white rounded-lg'>
            Lets Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
