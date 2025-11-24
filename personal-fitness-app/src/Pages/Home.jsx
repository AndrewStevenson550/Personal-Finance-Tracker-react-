import React from 'react'

function Home() {
  return (
    <>
      <div className="home-content">
        <h1 className="home-title">Welcome to the Personal Fitness App</h1>
        <p>To get started, please go to the Fitness Display page.</p>
      </div>

      <div className="howtouse-section">
  <h1>How to Use</h1>
  <ol>
    <li>
      Start by navigating to the Fitness Display page. You can find it in the navigation bar at the top of the screen.
    </li>
    <li>
      Once on the Fitness Display page, you can track your fitness goals and activities. You can add new activities, view your progress, and set goals for yourself.
    </li>
    <li>
      To add a new activity, click on the "Add Activity" button. This will open a form where you can enter the details of your activity, such as the type of activity, duration, and distance.
    </li>
    <li>
      After adding an activity, you can view your progress by clicking on the "View Progress" button. This will show you a chart of your activities and your progress towards your goals.
    </li>
    <li>
      To set goals for yourself, click on the "Set Goals" button. This will open a form where you can set goals for activities, such as distance, duration, or calories burned.
    </li>
    <li>
      Finally, don't forget to save your changes and log out when you're done using the app.
    </li>
  </ol>
</div>
    </>
  )
}

export default Home