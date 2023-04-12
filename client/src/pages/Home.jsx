import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="isolate mx-auto max-w-7xl px-5">
      <div className="mx-auto mt-20 h-full max-w-7xl text-center sm:mt-24 md:mt-32 lg:mt-44">
        <p className="mx-auto mb-2 max-w-xl text-base font-semibold sm:text-lg md:text-2xl">
          Discover stories, thinking, and expertise from writers.
        </p>
        <p className="mb-4 text-5xl font-bold leading-tight tracking-tight sm:mb-8 sm:text-6xl md:text-7xl lg:text-8xl">
          Consume the{" "}
          <span className="bg-gradient-to-br from-fuchsia-500 to-blue-600 bg-clip-text text-transparent">
            internet,
          </span>
          <br />
          your way.
        </p>
        <p className="mb-8 text-lg sm:mb-12 md:px-32 md:text-xl lg:text-2xl">
          Whether sharing your expertise, breaking news, or whatever’s on your
          mind, you’re in good company on{" "}
          <span className="font-light italic">Bloggergate</span>. Discover why
          millions of people have published their passions here.
        </p>
        <Link
          to="/blogs"
          className="mx-3 mb-6 rounded border border-black bg-black px-12 py-3 text-lg font-bold text-white transition-colors duration-200 hover:bg-transparent hover:text-black md:text-2xl lg:mb-0 lg:px-8"
        >
          View Blogs
        </Link>
      </div>
    </div>
  );
}
