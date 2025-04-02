import Nav from "../components/Nav";
import "../App.css";
import "../css/Home.css";
import HomeImage from "../assets/images/Home.png";

const Home = () => {
  return (
    <main>
      <Nav />
      <div className="home-content">
        <div className="home-info">
          <p>
            Are you looking for <b>woodden furniture</b> for your place?
          </p>
          <h1>This is the Right Place</h1>
          <button className="category-button">Explore Categories</button>
        </div>
        <div className="image-container">
          <div className="home-image">
            <img src={HomeImage} alt="Home image" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
