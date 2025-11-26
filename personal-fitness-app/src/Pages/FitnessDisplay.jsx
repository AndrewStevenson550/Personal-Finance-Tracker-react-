import React from "react";
import "../styles/fitnessdisplay.css";
import { useState, useEffect } from "react"; // ⬅️ Import useEffect
import FitnessCard from "../components/FitnessCard";

// Define the key for local storage
const LOCAL_STORAGE_KEY = "fitnessTracker.activities";

const FitnessDisplay = () => {
  // New state: activities array stores all saved activity objects
  const [calories, setCalories] = useState(0);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);
  
  const [activities, setActivities] = useState(() => {
    // 1. INITIALIZE STATE: Load from local storage
    const savedActivities = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedActivities ? JSON.parse(savedActivities) : [];
  });

  // 2. USE EFFECT: Save to local storage whenever 'activities' changes
  useEffect(() => {
    // Local storage only stores strings, so we must stringify the array
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(activities));
  }, [activities]); // ⬅️ Dependency array ensures this runs only when 'activities' changes


  // Add the current (possibly default) values as a single activity object
  const addActivity = () => {
    const newActivity = {
      id: Date.now(), // Use a unique ID like a timestamp
      calories: calories,
      distance: distance,
      duration: duration,
    };
    setActivities((prevActivities) => [...prevActivities, newActivity]);
    
    // Optional: Clear the input fields after adding
    setCalories(0);
    setDistance(0);
    setDuration(0);
  }


  return (
    <div className="fit-content">
      <div className="fit-card">
        <h2 className="fit-title">Fitness Tracker</h2>
        <div className="fit-inputs">
          <input className="fit-input1" placeholder="Calories" type="number" value={calories} onChange={(e) => setCalories(Number(e.target.value))}></input>
          <input className="fit-input2" placeholder="Distance" type="number" value={distance} onChange={(e) => setDistance(Number(e.target.value))}></input>
          <input className="fit-input3" placeholder="Time"     type="number" value={duration} onChange={(e) => setDuration(Number(e.target.value))}></input>

          <button className="fit-button" onClick={addActivity}>
            Add Activity
          </button>
        </div>
        
        {/* NOTE: This card shows the current input state, not a saved activity. 
           It might be confusing and is often removed in production code. */}
        <FitnessCard duration={duration} distance={distance} calories={calories} />
      </div>

      
      {activities.map((activity) => (
        <FitnessCard
          key={activity.id}
          duration={activity.duration}
          calories={activity.calories}
          distance={activity.distance}
        />
      ))}
    </div>
  );
};

export default FitnessDisplay;