import { useContext, useEffect } from "react";
import { getPosts } from "../api/getPosts";
import { AppContext } from "../context/Context";

export default function Home() {
  const { state, setState } = useContext(AppContext);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const data = await getPosts();
    // console.log(data);
    setState([...data]);
  };

  return (
    <div className="container mx-auto px-5">
      <div className="py-60">
        <h1 className="text-center text-2xl font-bold md:text-6xl">
          Initial Setup with TailwindCSS and React with Composition and Context.
        </h1>
      </div>
    </div>
  );
}
