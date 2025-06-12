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
        <div className="flex gap-4 mt-2">
          <button className="flex-1 rounded-full bg-pink-300 p-3 text-lg font-semibold text-white hover:bg-pink-400 transition cursor-pointer">
            Login
          </button>
          <button className="flex-1 rounded-full bg-pink-300 p-3 text-lg font-semibold text-white hover:bg-pink-400 transition cursor-pointer">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
