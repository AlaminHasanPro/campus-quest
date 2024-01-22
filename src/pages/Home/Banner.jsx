const Banner = () => {

  
  return (
    <div
      className="bg-[url('https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg')]
      md:h-[600px]"
    >
      <div className="flex items-center h-[600px] bg-gradient-to-r from-slate-950 to-transparent text-white">
        <div className="ml-10 w-1/2 ">
          <h3 className="text-5xl font-bold">Find Your Favorite</h3>
          <h2 className="text-5xl font-bold my-2 ">College</h2>
          <h5 className="text-5xl font-bold text-sky-500">From Here</h5>
          <p className="my-2">
            Welcome to our college finder website! Simplifying your search for
            the perfect college to unlock your dreams and discover a world of
            possibilities. Lets embark on this transformative journey together!
            Start exploring now!
          </p>
          <button className="btn btn-primary mt-4">More Details</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
