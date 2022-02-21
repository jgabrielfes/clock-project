import React from 'react';

class SecondsPointer extends React.Component {
  render() {
    const currentTime = new Date();
    const remainder = currentTime.getMilliseconds() / 1000;
    const seconds = currentTime.getSeconds();
    sessionStorage.remainder = remainder;
    return <span className="pointer seconds" style={{
      "--i": (seconds + remainder) * 6
    }}></span>;
  }
}

export default SecondsPointer;
