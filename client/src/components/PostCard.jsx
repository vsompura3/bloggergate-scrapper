import { Link, useParams } from "react-router-dom";

function randomNumber() {
  return Math.floor(Math.random() * 1000);
}

export default function PostCard({
  blog_id,
  blog_title,
  blog_url,
  site_from,
  time_elapsed,
  date_uploaded,
  tags,
  uploader,
  uploader_profile_url,
}) {
  return (
    <Link
      to={`/blogs/${blog_id}`}
      className="flex cursor-pointer flex-col border-2 border-black"
    >
      <img
        src={`https://picsum.photos/600/${randomNumber()}`}
        className="h-64 w-full border-b-2 border-b-black object-cover"
        alt="stock image"
        loading="lazy"
      />
      <div className="flex flex-1 flex-col justify-between gap-1 p-4">
        <h3 className="flex-1 py-2 text-2xl font-semibold leading-6 hover:bg-gradient-to-br hover:from-fuchsia-500 hover:to-blue-600 hover:bg-clip-text hover:text-transparent">
          <a href={blog_url}>{blog_title}</a>
        </h3>
        <div className="text-lg font-medium">
          Uploaded By:{" "}
          <a
            className="font-normal hover:bg-gradient-to-br hover:from-fuchsia-500 hover:to-blue-600 hover:bg-clip-text hover:text-transparent"
            href={uploader_profile_url}
          >
            {uploader}
          </a>
        </div>
        <a href={blog_url} className="inline-flex items-center gap-2 ">
          <span className="font-medium text-gray-700 hover:bg-gradient-to-br hover:from-fuchsia-500 hover:to-blue-600 hover:bg-clip-text hover:text-transparent">
            Read More
          </span>
        </a>
        <div className="text-slate-600">
          {time_elapsed.split(" ")[0] < 5 ? "Just now" : time_elapsed}
        </div>
      </div>
    </Link>
  );
}
