import Intro from "../components/Intro";
import Nav from "../components/Nav";
import ProductCard from "../components/ProductCard";
import KrishaImage from "../assets/images/Schuesseln.png";
import Footer from "../components/Footer";

const Krisha = () => {
  return (
    <>
      <Nav />
      <Intro introText="Deon" title="Products"></Intro>
      <ProductCard
        imageUrl={KrishaImage}
        cardText="Krisha demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic retro? You got it."
      />
      <Footer />
    </>
  );
};

export default Krisha;
