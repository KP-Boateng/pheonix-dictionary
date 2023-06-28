import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fragment } from "react";
import "./wordcarousel.css";

const WordCarousel = (props) => {
  let settings = {
    focusOnSelect: true,
    centerMode: true,
    slidesToShow: 2,
    swipeToSlide: true,
    draggable: true,
  };

  return (
    <Fragment>
      <Slider className="h-7 font-mono bg-black m-3 rounded-xl" {...settings}>
        <div className="slide">
          <button
            className="text-white underline"
            onClick={(event) => {
              props.word(event.target.value);
            }}
          >
            Hello
          </button>
        </div>
        <div className="slide">
          <button className="text-white underline ">There</button>
        </div>
        <div className="slide">
          <button className="text-white underline ">How</button>
        </div>
        <div className="slide">
          <button className="text-white underline ">are</button>
        </div>
        <div className="slide">
          <button className="text-white underline ">you</button>
        </div>
        <div className="slide">
          <button className="text-white underline ">doing</button>
        </div>
        <div className="slide">
          <button className="text-white underline ">there</button>
        </div>
        <div className="slide">
          <button className="text-white underline ">i</button>
        </div>
        <div className="slide">
          <button className="text-white underline ">hope</button>
        </div>
        <div>
          <button className="text-white underline ">you</button>
        </div>
      </Slider>
    </Fragment>
  );
};

export default WordCarousel;
