import { Col, Row } from "antd";
import "./../../Styles/AboutMe.scss";
import ProfilePicture from "./ProfilePicture";
import MyInformation from "./MyInformation";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <Row className="about-me-row">
        <Col xs={24} sm={8}>
          <ProfilePicture />
        </Col>
        <Col xs={24} sm={16}>
          <MyInformation />
        </Col>
      </Row>
    </div>
  );
};

export default AboutMe;
