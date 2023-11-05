import { Col, Row } from "antd";
import "./../../Styles/AboutMe.scss";
import ProfilePicture from "./ProfilePicture";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <Row>
        <Col span={16}>My Information Will Go Here</Col>
        <Col span={8}>
          <ProfilePicture />
        </Col>
      </Row>
    </div>
  );
};

export default AboutMe;
