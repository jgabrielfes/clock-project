import React from 'react';

class HoursPointer extends React.Component {
  render() {
    const currentTime = new Date();
    const remainder = (parseFloat(sessionStorage.remainder) + currentTime.getMinutes()) / 60;
    const hours = currentTime.getHours();
    sessionStorage.clear();
    return <span className="pointer hours" style={{
      "--i": (hours + remainder) * 30
    }}></span>;
  }
}

export default HoursPointer;
