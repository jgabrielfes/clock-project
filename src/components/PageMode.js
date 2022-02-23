import React from 'react';
import LightMode from '@mui/icons-material/LightMode';
import Switch from '@mui/material/Switch';
import DarkMode from '@mui/icons-material/DarkMode';
import pageModeColors from './PageModeData';

class PageMode extends React.Component {
  constructor() {
    super();
    this.state = {
      pageMode: localStorage.pageMode || 'light',
    };
    this.handlePageMode = this.handlePageMode.bind(this);
  }

  handlePageMode() {
    this.setState({
      pageMode: this.state.pageMode === 'light' ? 'dark' : 'light'
    }, () => localStorage.pageMode = this.state.pageMode);
  }

  render() {
    const { pageMode } = this.state;

    for (let key of Object.keys(pageModeColors[pageMode])) {
      document.querySelector(':root').style.setProperty(`--${key}`, pageModeColors[pageMode][key]);
    }

    return (
      <button className="page-mode-btn" onClick={this.handlePageMode}>
        <LightMode />
        <Switch checked={pageMode === 'dark'} color="default" />
        <DarkMode />
      </button>
    )
  }
}

export default PageMode;
