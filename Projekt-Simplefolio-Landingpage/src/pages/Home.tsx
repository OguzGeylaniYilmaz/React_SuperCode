import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";
import Intro from "../components/Intro/Intro";
import Project from "../components/Projekt/Project";
import Skill from "../components/Skill/Skill";
import "./home.css";

const Home = () => {
  return (
    <main>
      <Header></Header>
      <Intro></Intro>
      <Project></Project>
      <Skill></Skill>
      <Contact></Contact>
      <footer>
        Created By Oguz Geylani Yilmaz
      </footer>

    </main>
  );
};

export default Home;
