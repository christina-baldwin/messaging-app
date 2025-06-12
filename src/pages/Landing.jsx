const Landing = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-[500px] w-full">
        <h1 className="text-center font-sans mb-12 text-4xl text-pink-500">
          Happy Thoughts!
        </h1>
        <p className="text-center text-lg mb-12">
          Welcome to the Happy Thoughts app! Where you can post your own happy
          thoughts and view those of others. Login or register to get started!
        </p>
        <div className="flex justify-center  gap-4 mt-2">
          <button className=" ap-1 px-3 py-2 border-none rounded-[15px] bg-pink-200 font-bold text-lg cursor-pointer">
            Login
          </button>
          <button className="gap-1 px-3 py-2 border-none rounded-[15px] bg-pink-200 font-bold text-lg cursor-pointer">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
