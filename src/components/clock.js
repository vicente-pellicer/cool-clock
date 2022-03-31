import React from 'react';
import { useState } from "react";

function Clock() {
  const [time, setTime] = useState();

  const tick = () => {
    let now = new Date().toLocaleTimeString();
    setTime(now);
  };

  setInterval(tick, 1000);

  return (
    <div className="clock">
      <h1>{time}</h1>
    </div>
  )
}

export default Clock;