import React from 'react';
import PageMode from './PageMode';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h2>Clock</h2>
        <PageMode />
      </header>
    );
  }
}

export default Header;
