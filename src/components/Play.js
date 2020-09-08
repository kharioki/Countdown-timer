import React from 'react';

export const Play = ({ onPause, isActive }) => {
  return (
    <div className="play-pause" onClick={onPause}>
      {isActive ? (
        <i className={`material-icons icon`}>&#xe036;</i>
      ) : (
        <i className={`material-icons icon`}>&#xe039;</i>
      )}
    </div>
  );
};
