import { workExperienceItems } from "../../Utils/helper";
import "./../../Styles/WorkExperience.scss";
const WorkExperience = () => {
  return (
    <div className="work-experience-container">
      <h1 className="work-exp-heading">Work Experience</h1>
      <div className="work-experience-map-container">
        {workExperienceItems.map((item) => {
          return (
            <div className="work-experience-map" key={item.id}>
              <div className="work-experience-logo-heading">
                <img src={item.logo} alt="Company Logo" />
                <h1>{item.heading}</h1>
              </div>
              <div className="work-experience-details">
                <h3 className="work-experience-role">
                  {item.role},{" "}
                  <span className="work-exp-dates"> {item.dates}</span>
                </h3>
                <ul>
                  {item.responsibilities.map((res) => {
                    return (
                      <li className="work-exp-list" key={res.id}>
                        {res.desc}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkExperience;
