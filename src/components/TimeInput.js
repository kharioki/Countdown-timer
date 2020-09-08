import React, { useState } from 'react';

const TimeInput = ({ start, isActive, setTotalTime }) => {
  const [time, setTime] = useState();

  const handleChange = e => {
    setTime(e.target.value * 60);
  };

  const handLeStart = () => {
    if (time > 0) {
      setTotalTime(time);
      start();
    }
  };
  return (
    <>
      <label htmlFor="count">Countdown: </label>
      <input
        id="count"
        type="number"
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
    </>
  );
};

export default TimeInput;
