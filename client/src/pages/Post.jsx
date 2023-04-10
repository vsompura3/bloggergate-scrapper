import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/Context";

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const colors = [
  "before:bg-fuchsia-500",
  "before:bg-teal-500",
  "before:bg-red-500",
  "before:bg-cyan-500",
  "before:bg-purple-500",
  "before:bg-slate-500",
  "before:bg-yellow-500",
  "before:bg-orange-500",
  "before:bg-amber-500",
  "before:bg-pink-500",
  "before:bg-green-500",
  "before:bg-blue-500",
];

function generateColor() {
  return colors[randomIntFromInterval(0, colors.length)];
}

const BlogDetails = ({
  blog_title,
  blog_url,
  uploader,
  time_elapsed,
  uploader_profile_url,
}) => {
  return (
    <div className="container mx-auto px-5 ">
      <div className="mt-4 space-y-8 py-12 md:mt-12">
        <h3 className="mb-4 text-3xl font-bold tracking-tight lg:text-6xl">
          {blog_title}
        </h3>
        <div className="ml-4 flex items-center justify-between gap-4">
          <a
            href={uploader_profile_url}
            className={`relative text-lg font-medium before:absolute before:-left-2 before:top-1/2 before:-z-10 before:aspect-square before:h-8 before:-translate-y-1/2 before:rounded-full ${generateColor()} hover:underline md:text-xl`}
          >
            {uploader}
          </a>
          <span className="text-slate-400">
            {time_elapsed.split(" ")[0] < 5 ? "Just now" : time_elapsed}
          </span>
        </div>
      </div>
      <iframe className="min-h-screen w-full" src={blog_url}></iframe>
    </div>
  );
};

export default function Post() {
  const { blogId } = useParams();
  const [post, setPost] = useState([]);
  const { state, setState } = useContext(AppContext);
  const { hackerNews } = state;

  return (
    <div className="isolate">
      {hackerNews
        .filter((_post) => _post.blog_id == blogId)
        .map((_post) => (
          <BlogDetails key={_post.blog_id} {..._post} />
        ))}
    </div>
  );
}
