import React, { useState, useEffect } from 'react';


const EventTimer = ({ eventDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(eventDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZero = value => {
    return value < 10 ? `0${value}` : value;
  };

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="event-timer-container">
      {days !== undefined && (
        <div className="time-block">
          <span className="time">{addLeadingZero(days)}</span>
          <span className="unit">days</span>
        </div>
      )}
      <div className="time-block">
        <span className="time">{addLeadingZero(hours)}</span>
        <span className="unit">hours</span>
      </div>
      <div className="time-block">
        <span className="time">{addLeadingZero(minutes)}</span>
        <span className="unit">minutes</span>
      </div>
      <div className="time-block">
        <span className="time">{addLeadingZero(seconds)}</span>
        <span className="unit">seconds</span>
      </div>
    </div>
  );
};

export default EventTimer;
