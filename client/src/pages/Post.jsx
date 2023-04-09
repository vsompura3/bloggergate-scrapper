import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPosts } from "../api/getPosts";
import { AppContext } from "../context/Context";

const BlogDetails = ({ blog_title, blog_url, uploader }) => {
  return (
    <div>
      <iframe src={blog_url}></iframe>
      <h3 className="text-2xl font-semibold">{blog_title}</h3>
      <p className="text-lg font-medium">{uploader}</p>
    </div>
  );
};

export default function Post() {
  const { blogId } = useParams();
  const [post, setPost] = useState([]);
  const { state, setState } = useContext(AppContext);
  const { hackerNews } = state;

  return (
    <div>
      <div>
        {hackerNews
          .filter((_post) => _post.blog_id == blogId)
          .map((_post) => (
            <BlogDetails key={_post.blog_id} {..._post} />
          ))}
      </div>
    </div>
  );
}
