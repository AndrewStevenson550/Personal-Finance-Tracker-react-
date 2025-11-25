import React from "react";
import "../styles/fitnessdisplay.css";
import {useState} from "react";
import FitnessCard from "../components/FitnessCard";


const FitnessDisplay = () => {
  const [calories, setCalories] = useState(0);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);

  

  const handleCaloriesChange = (event) => {
    setCalories(Number(event.target.value));
  };

  const handleDistanceChange = (event) => {
    setDistance(Number(event.target.value));
  };

  const handleDurationChange = (event) => {
    setDuration(Number(event.target.value));
  };


  

  



  



  return <div className="fit-content">
    <div className="fit-card">
      <h2 className="fit-title">Fitness Tracker</h2>
      <div className="fit-inputs">
        <input
          placeholder="Calories Burned"
          type="number"
          className="fit-input1"
          value={calories}
          onChange={handleCaloriesChange}
        />
        <input
          placeholder="Distance Covered (mi or km)"
          type="number"
          className="fit-input2"
          value={distance}
          onChange={handleDistanceChange}
        />
        <input
          placeholder="Duration (mins)"
          type="number"
          className="fit-input3"
          value={duration}
          onChange={handleDurationChange}
        />
        <button className="fit-button">Add Activity</button>
      </div>
    </div>

    <FitnessCard distance={distance} duration={duration} calories={calories} />
  </div>;
};

export default FitnessDisplay;
