import React, { useEffect } from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getWeather } from '../store/weather/actions';

/* eslint-disable react/jsx-props-no-spreading */

const withWeather = (WrappedComponent) => {
  const WithWeather = (props) => {
    const { weather, loading, getWeatherAction } = props;

    useEffect(
      () => {
        getWeatherAction();
      }, 
      []
    );

    if (loading) {
      return (
        <Loader 
          type="TailSpin"
          color="Black"
          height={30}
          width={30}
        />
      );
    }

    return (
      <WrappedComponent weather={weather} {...props} />
    );
  };

  WithWeather.propTypes = {
    weather: PropTypes.shape({
      city: PropTypes.string,
      tempC: PropTypes.number,
      wind: PropTypes.number,
      condition: PropTypes.string
    }),
    setWeatherAction: PropTypes.func,
    loading: PropTypes.bool,
    getWeatherAction: PropTypes.func,
    setLoading: PropTypes.func
  };

  WithWeather.defaultProps = {
    weather: {
      city: '',
      tempC: 0,
      wind: 0,
      condition: ''
    },
    setWeatherAction: () => {},
    loading: false,
    getWeatherAction: () => {},
    setLoading: () => {}
  };

  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  WithWeather.displayName = `WithWeather(${displayName})`;

  const mapStateToProps = (rstate) => ({
    weather: rstate.weather.weather,
    loading: rstate.weather.loading
  });
  
  const mapDispatchToProps = {
    getWeatherAction: getWeather,
  };
  
  return connect(mapStateToProps, mapDispatchToProps)(WithWeather);
};

export default withWeather;
