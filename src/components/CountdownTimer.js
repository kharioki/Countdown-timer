import React, { useState, useEffect } from 'react';
import TimeInput from './TimeInput';
import { Play } from './Play';
import SpeedControls from './SpeedControls';

const CountdownTimer = () => {
  const [isActive, setIsActive] = useState(false);
  const [totalTime, setTotalTime] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [almostOver, setAlmostOver] = useState(false);
  const [blink, setBlink] = useState(false);
  const [timeUp, setTimeUp] = useState(false);
  const [update, setUpdate] = useState('');
  const [activeSpeed, setActiveSpeed] = useState(1);

  const time = totalTime - timeElapsed;
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? '0' + seconds : seconds;

  const start = () => {
    if (!isActive && !timeUp) {
      setIsActive(true);
    } else if (isActive && !timeUp) {
      setIsActive(false);
    }
  };

  // pause and resume timer
  const pauseTimer = () => {
    if (isActive && totalTime > 0) {
      setIsActive(false);
    } else {
      // resume
      start();
    }
  };

  const updateSpeed = num => {
    if (isActive) {
      setActiveSpeed(num);
    }
  };

  useEffect(() => {
    let interval = null;

    if (isActive) {
      if (totalTime - timeElapsed === timeElapsed) {
        setUpdate('More than halfway there!!');
      }

      if (timeElapsed === totalTime) {
        setBlink(false);
        setTimeUp(true);
        setUpdate("Time's up!!!");
        setIsActive(false);
      }

      if (totalTime - timeElapsed <= 20) {
        setAlmostOver(true);
      }

      if (totalTime - timeElapsed <= 10) {
        setBlink(true);
      }
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000 / activeSpeed);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time, activeSpeed, totalTime, timeElapsed]);
  return (
    <>
      <TimeInput
        start={start}
        isActive={isActive}
        setTotalTime={setTotalTime}
      />
      <p className="update">{update}</p>
      <div className="timer">
        <p
          className={`
      count-down
      ${almostOver ? (blink ? 'blinking' : 'almost-over') : ''}
    `}
        >
          {minutes}:{seconds}
        </p>
        <Play onPause={pauseTimer} isActive={isActive} />
      </div>
      <SpeedControls updateSpeed={updateSpeed} activeSpeed={activeSpeed} />
    </>
  );
};

export default CountdownTimer;
