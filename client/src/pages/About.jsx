import developers from "../api/developers";
import Developer from "../components/Developer";

export default function About() {
  return (
    <div className="container isolate mx-auto px-5 lg:mx-auto">
      <section aria-labelledby="about-header" className="py-12 sm:py-16">
        <h2
          className="mb-12 text-center text-3xl font-bold sm:mb-16 md:text-4xl"
          id="about-header"
        >
          About <span className="italic text-slate-800">`The Dream Team`</span>
        </h2>
        <div className="mx-16 grid gap-8 sm:grid-cols-2 md:mx-12 md:gap-8 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4">
          {developers &&
            developers.map((developer) => (
              <Developer key={developer.id} {...developer} />
            ))}
        </div>
      </section>
    </div>
  );
}
