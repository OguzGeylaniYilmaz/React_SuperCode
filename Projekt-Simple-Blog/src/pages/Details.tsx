import { blogData } from "../assets/data/main";
import { useParams } from "react-router-dom";
import "../assets/css/details.css";

const Details = () => {
  const { id } = useParams();
  const blog = blogData.find((item) => item.id === Number(id));

  if (!blog)
    return <div className="p-4 text-center text-red-500">Blog not found.</div>;
  return (
    <>
      <div className="p-6 flex flex-col items-center">
        <img
          src={blog.img_url}
          alt={blog.title}
          className="w-full max-w-3xl h-96 object-cover rounded-lg mb-12"
        />
      </div>
      <div>
        <div className="blog-detail">
          <h1>{blog.title}</h1>
          <p>{blog.published_date}</p>
        </div>

        <div className="blog-author">
          <p>{blog.description}</p>
          <p>
            <b>Author: {blog.author}</b>
          </p>
        </div>
      </div>
    </>
  );
};

export default Details;
