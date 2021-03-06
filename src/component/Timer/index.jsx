import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

export default class Timer extends Component {
  constructor() {
    super();

    this.state = {
      cron: 30,
    };
  }

  componentDidMount() {
    const sec = 1000;
    const { props: { handleTimer } } = this;
    this.timerID = setInterval(() => {
      const { state: { cron } } = this;
      this.setState((prevState) => ({
        cron: prevState.cron <= 0 ? 0 : prevState.cron - 1 }), () => handleTimer(cron));
    }, sec);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { state: { cron } } = this;
    return (
      <div className="timer-container">
        <div className="timer">
          { cron }
        </div>
        <div className="load-container">
          <div className='load-bar'></div>
        </div>
      </div>
    );
  }
}
Timer.propTypes = {
  handleTimer: PropTypes.func,
}.isRequired;
