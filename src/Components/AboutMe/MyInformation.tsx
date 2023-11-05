import { Carousel } from "antd";
import { MyInformationItems } from "../../Utils/helper";

const MyInformation = () => {
  return (
    <div className="my-information-container">
      <Carousel
        autoplay
        autoplaySpeed={3000}
        dots={false}
        arrows={false}
        infinite
      >
        {MyInformationItems?.map((item) => {
          return (
            <div className="my-information-map-cont" key={item.id}>
              <h1 className="my-information-heading">{item?.heading}</h1>
              <span className="my-information-paragraph">
                {item?.paragraph}
              </span>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MyInformation;
