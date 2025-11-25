import React from 'react'
import "../styles/fitnessCard.css";

function FitnessCard({ duration = 0, distance = 0, calories = 0 }) {
  return (
    <div className="fitness-card">
      <h3>Duration: {duration} mins</h3>
      <h3>Distance: {distance} miles</h3>
      <h3>Calories: {calories}</h3>
    </div>
  )
}

export default FitnessCard