import React from 'react';
import { CgDarkMode } from 'react-icons/cg';

const pageMode = localStorage.pageMode || 'light';

const pageModeColors = {
  light: {
    bgColor: 'white',
    headerColor: 'white',
  },
  dark: {
    bgColor: 'rgb(32, 32, 32)',
    headerColor: 'rgb(96, 96, 96)',
  }
}

class PageMode extends React.Component {
  constructor() {
    super();
    this.state = {
      pageMode: pageMode
    };
    this.handlePageMode = this.handlePageMode.bind(this);
  }

  handlePageMode() {
    const { pageMode } = this.state;
    this.setState({
      pageMode: pageMode === 'light' ? 'dark' : 'light'
    }, () => localStorage.pageMode = pageMode);
    for (let key of Object.keys(pageModeColors[pageMode])) {
      document.querySelector(':root').style.setProperty(`--${key}`, pageModeColors[pageMode][key]);
    }
  }

  render() {
    return (
      <button className="page-mode-btn" onClick={this.handlePageMode}>
        <CgDarkMode size="1.8em" />
      </button>
    )
  }
}

export default PageMode;
