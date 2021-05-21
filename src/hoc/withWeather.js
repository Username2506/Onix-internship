import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setWeather } from '../store/weather/actions';

/* eslint-disable react/jsx-props-no-spreading */

const withWeather = (WrappedComponent) => {
  const WithWeather = (props) => {
    const { weather, setWeatherAction } = props;
    const [loading, setLoading] = useState(true);

    useEffect(
      () => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=London&aqi=no`)
          .then((response) => response.json())
          .then((response) => {
            setWeatherAction({
              city: response.location.name,
              tempC: response.current.temp_c,
              wind: response.current.wind_kph,
              condition: response.current.condition.text,
            });
            setLoading(false);
          })
          .catch(() => {
            alert('Не удалось получить информацию о погоде');
            setLoading(false);
          });
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
    setWeatherAction: PropTypes.func
  };

  WithWeather.defaultProps = {
    weather: {
      city: '',
      tempC: 0,
      wind: 0,
      condition: ''
    },
    setWeatherAction: () => {}
  };

  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  WithWeather.displayName = `WithWeather(${displayName})`;

  const mapStateToProps = (rstate) => ({
    weather: rstate.weather.weather
  });
  
  const mapDispatchToProps = {
    setWeatherAction: setWeather
  };
  
  return connect(mapStateToProps, mapDispatchToProps)(WithWeather);
};

export default withWeather;
