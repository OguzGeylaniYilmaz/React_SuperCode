import ArticleTeaser from "../components/Article-Teaser";
import { blogData } from "../assets/data/main";
import "../assets/css/blog.css";

const Blog = () => {
  return (
    <div className="p-6">
      <div className="grid-container">
        {blogData.map((blog) => (
          <ArticleTeaser
            key={blog.id}
            id={blog.id}
            title={blog.title}
            img_url={blog.img_url}
          />
        ))}
      </div>
    </div>
  );
};
export default Blog;
