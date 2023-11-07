import AboutMe from "./Components/AboutMe";
import Education from "./Components/Education";
import Navbar from "./Components/Navbar";
import TechnicalSkills from "./Components/TechnicalSkills";
import WorkExperience from "./Components/WorkExperience";
import "./Styles/App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <WorkExperience />
      <Education />
      <TechnicalSkills />
    </div>
  );
}

export default App;
