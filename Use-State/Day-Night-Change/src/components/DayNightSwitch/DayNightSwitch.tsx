import { useState } from "react";
import "./DayNightSwitch.css";

const DayNightSwitch = () => {
  const [isNight, setIsNight] = useState(false);

  const toogleDayNight = () => {
    setIsNight(!isNight);
  };

  return (
    <div className={`day-night ${isNight ? "night" : "day"}`}>
      <h1>{isNight ? "Night" : "Day"}</h1>
      <button onClick={toogleDayNight}>
        {isNight ? "Change to Day" : "Change to Night"}
      </button>{" "}
    </div>
  );
};

export default DayNightSwitch;
