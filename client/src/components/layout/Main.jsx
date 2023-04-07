export default function Main({ children }) {
  return (
    <main className="relative flex-1">
      <div
        className="animate-blob blob-delay-2000 absolute left-8 top-16 h-64 w-64 rounded-full bg-red-300 blur-2xl md:left-1/3 md:mix-blend-multiply"
        aria-hidden="true"
      ></div>
      <div
        className="animate-blob blob-delay-4000 absolute right-8 top-16 h-64 w-64 rounded-full bg-blue-300 blur-2xl md:right-1/3 md:mix-blend-multiply"
        aria-hidden="true"
      ></div>
      <div
        className="animate-blob blob-delay-4000 absolute bottom-24 right-16 h-64 w-64 rounded-full bg-fuchsia-300 blur-2xl md:right-1/2 md:mix-blend-multiply"
        aria-hidden="true"
      ></div>
      <div
        className="animate-blob blob-delay-6000 absolute bottom-8 right-4 h-64 w-64 rounded-full bg-yellow-300 mix-blend-multiply blur-2xl md:right-1/4"
        aria-hidden="true"
      ></div>
      {children}
    </main>
  );
}
