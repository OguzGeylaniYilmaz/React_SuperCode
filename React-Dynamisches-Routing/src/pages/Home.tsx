import { useState, useEffect } from "react";
import { Car } from "../types/Car";
import cars from "../cars.json";
import { Link } from "react-router-dom";

const Home = () => {
  const [carList, setCarList] = useState<Car[]>([]);

  useEffect(() => {
    setCarList(cars);
  }, []);

  return (
    <div>
      <h1>SuperCar List</h1>
      <div className="grid">
        {carList.map((car) => (
          <div className="App">
            <p>{car.CarMake}</p>
            <Link to={`/car/${car.id}`} className="">
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
