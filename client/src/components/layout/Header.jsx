import { Link, NavLink, useParams } from "react-router-dom";

export default function Header() {
  return (
    <nav className="border-b border-slate-200">
      <header className="container mx-auto px-5">
        <div className="flex flex-col items-center gap-6 py-8 md:justify-between lg:flex-row lg:gap-4">
          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:pr-8">
            <Link to="/">Bloggergate.</Link>
          </h1>
          <div className="flex gap-8 text-center text-xl md:text-left lg:pl-8">
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "bg-gradient-to-br from-fuchsia-500 to-blue-600 bg-clip-text text-transparent"
                  : "text-black"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "bg-gradient-to-br from-fuchsia-500 to-blue-600 bg-clip-text text-transparent"
                  : "text-black"
              }
              to="/blogs"
            >
              Blogs
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "bg-gradient-to-br from-fuchsia-500 to-blue-600 bg-clip-text text-transparent"
                  : "text-black"
              }
              to="/about"
            >
              About
            </NavLink>
          </div>
        </div>
      </header>
    </nav>
  );
}
