export default function Footer() {
  return (
    <footer className="bg-accent-1 border-accent-2 border-t">
      <div className="container relative mx-auto px-5">
        <div className="flex flex-col items-center py-4 lg:flex-row">
          <h3 className="mb-10 text-center text-3xl font-bold leading-tight tracking-tighter lg:mb-0 lg:w-1/2 lg:pr-4 lg:text-left">
            Created with <span className="text-cyan-500/90">ReactJS</span> and{" "}
            <span className="text-red-600/90">Java</span>{" "}
            <span className="text-green-500/90">SpringBoot</span>
          </h3>
          <div className="flex flex-col items-center justify-end lg:w-1/2 lg:flex-row lg:pl-4">
            <a
              href="https://github.com/vsompura3/bloggergate-scrapper"
              rel="noopener noreferrer"
              className="mb-6 border border-black bg-black px-12 py-3 font-bold text-white transition-colors duration-200 hover:bg-white hover:text-black lg:mb-0 lg:px-8"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
