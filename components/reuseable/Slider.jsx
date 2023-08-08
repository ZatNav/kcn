import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = ({ slides }) => (
  <Carousel>
    {slides.map((slide, index) => (
      <Carousel.Item key={index}>
        <img
          className="img-fluid"
          width="100%"
          height="auto"
          src={slide.src}
          alt={slide.text}
        />
        <Carousel.Caption>
          <h3>{slide.heading}</h3>
          {/* <p>{slide.text}</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
);

Slider.defaultProps = {
  slides: [
    {
      src: "5.jpg",
      heading: "First slide label",
      text: "First slide text",
    },
    {
      src: "6.jpg",
      heading: "Second slide label",
      text: "Second slide text",
    },
    {
      src: "9.jpg",
      heading: "Third slide label",
      text: "Third slide text",
    },
  ],
};
export default Slider;
