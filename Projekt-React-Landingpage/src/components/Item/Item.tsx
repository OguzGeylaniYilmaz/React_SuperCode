

type probsItem = {
    img:string;
    title:string;
    description:string;
    price:number;
}

const Item = (probs:probsItem) => {
    return ( 
      <div>
        <img src={probs.img} alt={probs.title}></img>
        <h2>{probs.title}</h2>
        <p>{probs.description}</p>
        <p>{probs.price} $</p>
      </div>
     );
}
 
export default Item;