import AboutMe from "./Components/AboutMe";
import Navbar from "./Components/Navbar";
import WorkExperience from "./Components/WorkExperience";
import "./Styles/App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <WorkExperience />
    </div>
  );
}

export default App;
