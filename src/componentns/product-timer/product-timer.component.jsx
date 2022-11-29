import "./product-timer.style.scss";
import { useEffect, useState } from "react";
import timerBoy from "./img/timer-boy.jpg";
import {
  ButtonLink,
  HeadingLink,
  SmallText,
} from "../typography/typography.component";
let timeInterval;
const DATE_LIMIT = "31 dec 2022";
function calculateTime() {
  const millisecToSec = 1000;
  const upcomingTime = Date.parse(new Date(DATE_LIMIT));
  const currentTime = Date.parse(new Date());
  const timeRemaining = (upcomingTime - currentTime) / millisecToSec;
  if (timeRemaining < 0) clearInterval(timeInterval);
  const seconds = Math.floor(timeRemaining % 60);
  const minutes = Math.floor((timeRemaining / 60) % 60);
  const hours = Math.floor((timeRemaining / 60 / 60) % 24);
  const days = Math.floor(timeRemaining / 60 / 60 / 24);
  return { seconds, minutes, hours, days };
}
const ProductTimer = () => {
  const [time, setTime] = useState({});
  const { days, hours, minutes, seconds } = time;
  function timeLeft() {
    const updatedTime = calculateTime();
    setTime({ ...time, ...updatedTime });
  }
  useEffect(() => {
    setInterval(timeLeft, 1000);
  }, []);
  return (
    <div className="product-timer">
      <div className="product-timer__upper">
        <div className="product-timer__img">
          <img src={timerBoy} alt="" />
        </div>
        <div className="product-timer__time">
          <div>
            <span>{days}</span>
            <span>Days</span>
          </div>
          <div>
            <span>{hours}</span>
            <span>Hours</span>
          </div>
          <div>
            <span>{minutes}</span>
            <span>Min</span>
          </div>
          <div>
            <span>{seconds}</span>
            <span>Sec</span>
          </div>
        </div>
      </div>
      <HeadingLink>Luxary Product</HeadingLink>
      <SmallText>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </SmallText>
      <ButtonLink>Order now</ButtonLink>
    </div>
  );
};

export default ProductTimer;
