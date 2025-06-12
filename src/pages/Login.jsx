import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-[500px] rounded-md bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center font-sans text-4xl font-bold text-pink-500">
          Log in
        </h2>
        <form className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-pink-300 px-4 py-3 text-lg font-semibold text-white hover:bg-pink-400 transition cursor-pointer"
          >
            Log In
          </button>
        </form>

        <p className="mt-6 text-center text-lg text-gray-700">
          Don’t have an account?{" "}
          <Link to="/register" className="text-pink-500 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
