import { useContext, useEffect } from "react";
import { getPosts } from "../api/getPosts";
import PostCard from "../components/PostCard";
import { AppContext } from "../context/Context";

export default function Blogs() {
  const { state, setState } = useContext(AppContext);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const data = await getPosts();
    setState((prev) => ({ ...prev, hackerNews: data }));
  };
  return (
    <div className="container isolate mx-auto px-5">
      <section aria-labelledby="recents-header" className="py-12 sm:py-16">
        <h2
          className="mb-12 text-center text-3xl font-bold sm:mb-16 md:text-4xl"
          id="recents-header"
        >
          Recents
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {state.hackerNews.map((post) => (
            <PostCard key={post.blog_id} {...post} />
          ))}
        </div>
      </section>
    </div>
  );
}
