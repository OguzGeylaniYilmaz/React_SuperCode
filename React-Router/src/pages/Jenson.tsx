import Intro from "../components/Intro";
import Nav from "../components/Nav";
import ProductCard from "../components/ProductCard";
import JensonImage from "../assets/images/Tisch.png";
import Footer from "../components/Footer";

const Jenson = () => {
  return (
    <>
      <Nav />
      <Intro introText="Jenson" title="Products"></Intro>
      <ProductCard
        imageUrl={JensonImage}
        cardText="Jenson demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic retro? You got it."
      />
      <Footer />
    </>
  );
};

export default Jenson;
