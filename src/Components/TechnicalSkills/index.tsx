import { TypeAnimation } from "react-type-animation";
import { technicalSkillsItems } from "../../Utils/helper";
import "./../../Styles/TechnicalSkills.scss";

const TechnicalSkills = () => {
  return (
    <div className="tech-skill-container">
      <h1 className="tech-heading">
        <TypeAnimation sequence={["Technical Skills 👨‍💻", 1000]} />
      </h1>
      <div className="tech-skill-map-container">
        {technicalSkillsItems.map((item) => {
          return (
            <div className="tech-skill-item" key={item.id}>
              <h3 className="tech-skill-heading">{item.heading}</h3>
              <div className="tech-skill-details">
                {item.items.map((im) => {
                  return (
                    <div className="tech-skill-single" key={im.id}>
                      <img
                        className="tech-skill-img"
                        src={im.url}
                        alt="Skill Img"
                      />
                      <span className="tech-skill-title">{im.heading}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechnicalSkills;
