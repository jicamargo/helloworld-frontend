// App.js
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchGreeting from './actions/greetingActions';
import Greeting from './components/Greeting';

const App = ({ fetchGreeting }) => {
  useEffect(() => {
    fetchGreeting(); // get the greeting from the API on load
  }, [fetchGreeting]);

  return (
    <BrowserRouter>
      <div>
        <h1>Welcome to Rails-React Front-End</h1>
        <p>
          This is a simple app that uses React/Redux for the front-end and Rails for
          the back-end.
        </p>
        <p>
          Be sure that you have started the Rails server before. (repository:
          <a href="https://github.com/jicamargo/helloworld_backend">
            helloworld_backend
          </a>
          )
        </p>
        <p>
          Refresh the page if you want to see a different greeting.
          ⏬
        </p>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const mapDispatchToProps = {
  fetchGreeting,
};

App.propTypes = {
  fetchGreeting: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(App);
