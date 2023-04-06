export default function Header() {
  return (
    <nav className="border-b border-slate-200">
      <header className="container mx-auto px-5">
        <div className="flex flex-col items-center py-8 md:justify-between lg:flex-row">
          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:pr-8">
            Bloggergate.
          </h1>
          <p className="mt-5 text-center text-xl md:text-left lg:pl-8">
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
        </div>
      </header>
    </nav>
  );
}
