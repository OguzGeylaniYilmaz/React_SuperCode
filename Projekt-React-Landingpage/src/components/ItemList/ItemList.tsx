import Item from "../Item/Item";
import Salat from "../../assets/images/salat.jpeg";
import Pizza from "../../assets/images/pizza.jpeg";
import Frikadellen from "../../assets/images/frikadellen.jpeg";
import Glass from "../../assets/images/glass.jpeg";
import Pizza2 from "../../assets/images/pizza2.jpeg";
import Scampi from "../../assets/images/scampi.jpeg";
import Spagetti from "../../assets/images/spagetthi.jpeg";
import Teller from "../../assets/images/teller.jpeg";

import './ItemList.css';

type ItemType = {
  img: string;
  title: string;
  description: string;
  price: number;
};

const itemListData: ItemType[] = [
  {
    img: Salat,
    title: "Fusce dictum finibus",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean",
    price: 9,
  },
  {
    img: Pizza,
    title: "Aliquam sagittis",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean",
    price: 45,
  },
  {
    img: Frikadellen,
    title: "Sed varius turpis",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean",
    price: 65,
  },
  {
    img: Glass,
    title: "Aliquam sagittis",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean",
    price: 30.5,
  },
  {
    img: Pizza2,
    title: "Macenas eget justo",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean",
    price: 25.5,
  },
  {
    img: Scampi,
    title: "Quisque et felis eros",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean",
    price: 32,
  },
  {
    img: Spagetti,
    title: "Sed ultricies dui",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean",
    price: 16,
  },
  {
    img: Teller,
    title: "Donec porta consquat",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean",
    price: 12,
  },
];

const RandomItems = () => {
  return (
    <div className="item-list">
      {itemListData.map((item, index) => (
        <Item
          key={index}
          img={item.img}
          title={item.title}
          description={item.description}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default RandomItems;
