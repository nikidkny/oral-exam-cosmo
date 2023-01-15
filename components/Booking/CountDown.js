import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Timeout from "./Timeout";

const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);
  if (minutes <= 10) minutes = `0` + minutes;
  if (seconds <= 10) seconds = `0` + seconds;
  return minutes + `:` + seconds;
};
export default function CountDown({ seconds }) {
  const { showTimeout, setShowTimeout } = useContext(AppContext);
  const [countdown, setCountdown] = useState(seconds);
  function myalert() {
    if (window.confirm(`Your reservation has expired would you like to restart your booking?`)) {
      window.location = "booking/";
    } else {
      window.location = "home/";
    }
  }
  const timerId = useRef();
  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  });
  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timerId.current);
      myalert();
    }
  }, [countdown]);
  return <h2>Tickets are reserved until: {formatTime(countdown)}</h2>;
}
