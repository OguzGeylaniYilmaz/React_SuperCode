import ProduktKart from "../Produktkarten/ProduktKarten";
import './Produkt.css'

const Produkt = () => {
  const products = [
    { img: "bottle-cocooil.jpg", product: "cocooi", price: "$30" },
    { img: "photo-camera", product: "Irgendwas", price: "$60" },
    { img: "shampoo.webp", product: "Was was", price: "$20" },
  ];
  return (
    <>
      <div className="container">
        {products.map((item, index) => (
          <ProduktKart key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default Produkt;
