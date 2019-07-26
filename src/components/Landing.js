import React from 'react';
import PropTypes from 'prop-types';
import './Landing.css';

const Landing = () => {
  return (
    <section className="home-page">
    <p className="intro shimmer">Mirror, mirror on the wall, who's the smartest, strongest, inner and outer beauty of them all?</p>
    <h1 className="app-name">Beauty Studio</h1>
    </section>
  );
};

Landing.propTypes = {
  films: PropTypes.array
};

export default Landing;