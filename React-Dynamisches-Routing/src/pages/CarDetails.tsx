import { useParams } from "react-router-dom";
import cars from "../cars.json";
import { Car } from "../types/Car";
import "../assets/css/carDetails.css";

const CarDetails = () => {
  const { id } = useParams();
  const car = cars.find((singleCar) => singleCar.id === Number(id));

  if (!car) return <div>Sorry:/ Car not found.</div>;

  const { carModel, CarMake, CarYear } = car;

  return (
    <>
      <div className="car-container">
        <p> CarMake = {CarMake}</p>
        <p> carModel = {carModel}</p>
        <p>Year: {CarYear}</p>
      </div>
    </>
  );
};

export default CarDetails;
