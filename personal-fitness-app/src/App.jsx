import "./styles/Hero.css";
import FitnessDisplay from "./components/FitnessDisplay";
import Hero from "./components/Hero";
import "./styles/app.css";
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  return (
    <>
      {/* <Hero /> */}
      <NavBar />
      <div className="home-content">
        <h1 className="home-title">Welcome to the Personal Fitness App</h1>
        <p>To get started, please go to the Fitness Display page.</p>
      </div>

      <div className="about-section">
        <h2>About Us</h2>
        <p>
          The core dedication of our fitness application is to create a
          comprehensive and empowering ecosystem where users can not only set
          ambitious fitness objectives but are also provided with the precise
          digital tools necessary to realize them. This begins with the
          user-friendly interface, which is not merely an aesthetic choice but a
          critical feature engineered through extensive testing and feedback to
          guarantee a smooth, intuitive navigation experience, effectively
          eliminating the technological hurdles that often impede consistency;
          the clean design and logical flow ensure that whether a user is a
          beginner or a seasoned athlete, they can instantly understand where to
          go to initiate a workout, review their historical data, or adjust
          their nutritional inputs. Furthermore, the app excels in the critical
          area of tracking workouts by acting as a highly flexible and
          intelligent personal training journal, supporting a vast library of
          exercises for weightlifting, cardio, bodyweight training, and
          specialized activities, allowing for rapid logging, the creation and
          storage of highly detailed, customized multi-week routines, and
          potentially even providing in-session prompts and rest timers to
          optimize performance and safety. Finally, the truly transformative
          element is the robust mechanism for tracking progress, which moves far
          beyond simple numerical logging; the application processes the
          collected data—including volume lifted, distance covered, consistency,
          and body metrics—and translates it into rich, visually dynamic
          reports, such as heatmaps demonstrating muscle group recovery,
          interactive line graphs illustrating strength gains over time, and
          personalized milestone achievements, which serve as crucial,
          non-verbal motivators, offering tangible, incontrovertible evidence of
          the user's hard work and commitment, thereby building long-term
          adherence and a sense of genuine accomplishment within their personal
          fitness journey.
        </p>
      </div>
    </>
  );
}

export default App;
