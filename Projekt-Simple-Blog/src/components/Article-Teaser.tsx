import { Link } from "react-router-dom";
import Button from "./Button";

type TeaserProps = {
  id: number;
  title: string;
  img_url: string;
};

const ArticleTeaser = ({ id, title, img_url }: TeaserProps) => {
  return (
    <div>
      <div className="border rounded shadow p-4">
        <img
          src={img_url}
          alt={title}
          className="w-full h-48 object-cover rounded"
        />
      </div>
      <h2 className="text-lg font-semibold mt-2 text-center">{title}</h2>
      <div>
        <Link to={`/blog/${id}`}>
          <Button className="mt-2">Read more</Button>
        </Link>
      </div>
    </div>
  );
};

export default ArticleTeaser;
