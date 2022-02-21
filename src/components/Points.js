import React from 'react';

class Points extends React.Component {
  render() {
    const { index } = this.props;
    return (
      <span className="point-container" style={{
        transform: `rotate(calc(${index} * 6deg))`
      }}>
        <span className="point" style={{
          height: index % 5 !== 0 ? "5%" : "10%"
        }}>
        </span>
        {index % 5 === 0 && <p style={{
          "--fixRotation": index
        }}>{index / 5}</p>}
      </span>
    );
  }
}

export default Points;
