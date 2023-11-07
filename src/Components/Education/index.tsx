import { TypeAnimation } from "react-type-animation";
import { educationItems } from "../../Utils/helper";
import "./../../Styles/Education.scss";

const Education = () => {
  return (
    <div className="education-container">
      <h1 className="edu-heading">
        <TypeAnimation sequence={["Education 👨‍🎓", 1000]} />
      </h1>
      <div className="edu-map-container">
        <div className="edu-map-inner">
          {educationItems?.map((item) => {
            return (
              <div key={item.id} className="edu-item">
                <div className="edu-logo">
                  <img src={item.logo} alt="School Logo" />
                </div>
                <div className="edu-details">
                  <h2>{item.school}</h2>
                  <h3>{item.degree}</h3>
                  <h3>{item.dates}</h3>
                  <h3>{item.cgpa}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Education;
