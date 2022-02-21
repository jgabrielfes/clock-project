import React from 'react';
import Points from './Points';
import SecondsPointer from './SecondsPointer';
import MinutesPointer from './MinutesPointer';
import HoursPointer from './HoursPointer';

class Clock extends React.Component {
  render() {
    const points = [];
    for (let i = 1; i <= 60; i += 1) {
      points.push(<Points key={`point${i}`} index={i} />);
    }

    return (
      <div className="clock">
        {points}
        <SecondsPointer />
        <MinutesPointer />
        <HoursPointer />
      </div>
    );
  }
}

export default Clock;
