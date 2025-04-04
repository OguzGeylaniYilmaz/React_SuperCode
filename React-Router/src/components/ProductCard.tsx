import "../css/product-card.css";

type ProductcardProps = {
  imageUrl: string;
  cardText: string;
};

const ProductCard = ({ cardText, imageUrl }: ProductcardProps) => {
  return (
    <>
      <div className="card-container">
        <div className="card-image">
          <img src={imageUrl} />
        </div>
        <div className="card-text">{cardText}</div>
      </div>
    </>
  );
};

export default ProductCard;
