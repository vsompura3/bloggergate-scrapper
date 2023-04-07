import { useContext, useEffect } from "react";
import { getPosts } from "../api/getPosts";
import { AppContext } from "../context/Context";

export default function Blogs() {
  const { state, setState } = useContext(AppContext);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const data = await getPosts("lobste", "recent");
    setState([...data]);
  };
  return <div>Blogs</div>;
}
