import React from 'react';

const SpeedControls = ({ updateSpeed, activeSpeed }) => {
  return (
    <div>
      <button
        className={`speed-button ${activeSpeed === 1 ? 'selected' : ''}`}
        onClick={() => updateSpeed(1)}
      >
        1X
      </button>
      <button
        className={`speed-button ${activeSpeed === 1.5 ? 'selected' : ''}`}
        onClick={() => updateSpeed(1.5)}
      >
        1.5X
      </button>
      <button
        className={`speed-button ${activeSpeed === 2 ? 'selected' : ''}`}
        onClick={() => updateSpeed(2)}
      >
        2X
      </button>
    </div>
  );
};

export default SpeedControls;
