import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';

/* eslint-disable react/jsx-props-no-spreading */

const withWeather = (WrappedComponent) => {
  const WithWeather = (props) => {
    const [state, setState] = useState({
      city: '',
      tempC: 0,
      wind: 0,
      condition: '',
      loading: true
    });

    useEffect(
      () => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=London&aqi=no`)
          .then((response) => response.json())
          .then((response) => {
            setState({
              city: response.location.name,
              tempC: response.current.temp_c,
              wind: response.current.wind_kph,
              condition: response.current.condition.text,
              loading: false
            });
          })
          .catch(() => {
            alert('Не удалось получить информацию о погоде');
            setState({ loading: false });
          });
      }, 
      []
    );

    if (state.loading) {
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
      <WrappedComponent weather={state} {...props} />
    );
  };
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  WithWeather.displayName = `WithWeather(${displayName})`;
  return WithWeather;
};

export default withWeather;
