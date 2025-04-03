import { Link } from "react-router-dom";
import "../assets/css/home.css";
import Button from "../components/Button";
import Navbar from "../components/Nav";

const Home = () => {
  return (
    <div className="container">
      <div className="top-half">
        <Navbar />
      </div>
      <div className="bottom-half">
        <div className="home-title">
          <p>
            Welcome to my
            <br /> simple Blog
          </p>
        </div>

        <Link to={`/blog`}>
          <Button className="mt-2">Go to Articles</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
