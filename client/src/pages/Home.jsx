import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container isolate mx-auto px-5">
      <div className="mx-auto mt-20 h-full max-w-5xl text-center sm:mt-40">
        <p className="mb-4 text-5xl font-bold leading-tight tracking-tight sm:mb-12 sm:text-6xl md:text-7xl lg:text-8xl">
          Consume the internet,
          <br />
          <span className="bg-gradient-to-br from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            your way.
          </span>
        </p>
        <p className="mb-8 text-lg sm:mb-12 md:px-32 md:text-xl lg:text-2xl">
          Whether sharing your expertise, breaking news, or whatever’s on your
          mind, you’re in good company on Bloggergate. Discover why millions of
          people have published their passions here.
        </p>
        <Link
          to="/blogs"
          className="mx-3 mb-6 rounded border border-black bg-black px-12 py-3 text-lg font-bold text-white transition-colors duration-200 hover:bg-transparent hover:text-black md:text-2xl lg:mb-0 lg:px-8"
        >
          View Posts
        </Link>
      </div>
    </div>
  );
}
