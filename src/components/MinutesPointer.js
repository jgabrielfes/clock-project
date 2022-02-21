import React from 'react';

class MinutesPointer extends React.Component {
  render() {
    const currentTime = new Date();
    const remainder = (parseFloat(sessionStorage.remainder) + currentTime.getSeconds()) / 60;
    const minutes = currentTime.getMinutes();
    sessionStorage.remainder = remainder;
    return <span className="pointer minutes" style={{
      "--i": (minutes + remainder) * 6
    }}></span>;
  }
}

export default MinutesPointer;
