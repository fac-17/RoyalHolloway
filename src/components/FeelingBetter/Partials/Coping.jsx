import React from "react";
import { Swipeable } from "react-swipeable";
import "./Coping.css";
import groundingVideo from "../../assets/video/groundingVideo.mp4";
import groundingAudio from "../../assets/audio/groundingAudio.mp4";
import pmrAudio from "../../assets/audio/pmrAudio.m4a";

const Coping = () => {
  const [index, setIndex] = React.useState(0);
  const circleArray = [1, 2, 3];

  const swipingLeft = () => {
    index < 3 ? setIndex(index + 1) : setIndex(index);
  };

  const swipingRight = () => {
    index > 0 ? setIndex(index - 1) : setIndex(index);
  };

  return (
    <section id="coping-section__container">
      <h3>Tips for coping with anxiety, panic, flashbacks and dissociation</h3>
      <Swipeable onSwipedLeft={swipingLeft} onSwipedRight={swipingRight}>
        <section
          className={index === 0 ? "coping__section-active" : "coping__section"}
          id="0"
        >
          <video className="coping-section__file" controls>
            <source src={groundingVideo} type="video/mp4" />
          </video>
        </section>

        <section
          className={index === 1 ? "coping__section-active" : "coping__section"}
          id="1"
        >
          <audio controls>
            <source src={pmrAudio} type="audio/mp4" />
          </audio>
        </section>

        <section
          className={index === 2 ? "coping__section-active" : "coping__section"}
          id="2"
        >
          <audio controls>
            <source src={groundingAudio} type="audio/mp4" />
          </audio>
        </section>
      </Swipeable>
      <div className="coping__circle__container">
        {circleArray.map((circle, i) => (
          <span
            className={
              i === index ? "coping__circle__active" : "coping__circle"
            }
          />
        ))}
      </div>
      <div>
        <span onClick={swipingRight} className="coping__arrow__left">
          {" "}
          ⟵{" "}
        </span>
        <span onClick={swipingLeft} className="coping__arrow__right">
          {" "}
          ⟶{" "}
        </span>
      </div>
    </section>
  );
};

export default Coping;
