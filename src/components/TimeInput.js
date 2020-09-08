import React, { useState } from 'react';

const TimeInput = ({
  start,
  isActive,
  setTotalTime,
  setTimeUp,
  timeUp,
  setTimeElapsed,
  setBlink,
  setAlmostOver,
  setUpdate
}) => {
  const [time, setTime] = useState();
  const [num, setNum] = useState();

  const handleChange = e => {
    setTime(e.target.value * 60);
    setNum(e.target.value);
  };

  const handLeStart = () => {
    if (time > 0) {
      setTotalTime(time);
      setTimeElapsed(0);
      setTimeUp(false);
      setBlink(false);
      setAlmostOver(false);
      setUpdate('');
      start();
    }
  };

  const handleReset = () => {
    setTime(0);
    setNum(0);
    setTotalTime(0);
    setTimeElapsed(0);
    setTimeUp(false);
    setBlink(false);
    setAlmostOver(false);
    setUpdate('');
  };
  return (
    <>
      <label htmlFor="count">Countdown: </label>
      <input
        id="count"
        type="number"
        value={num}
        onChange={handleChange}
        placeholder="(Min)"
      />
      <button
        className="start-button"
        onClick={handLeStart}
        disabled={isActive}
      >
        Start
      </button>
      {timeUp && (
        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
      )}
    </>
  );
};

export default TimeInput;
