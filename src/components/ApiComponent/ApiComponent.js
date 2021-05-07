import React from 'react';
import PropTypes from 'prop-types';
import './css/ApiComponent.css';
import withWeather from '../../hoc/withWeather';

const ApiComponent = (props) => {
  const { 
    weather
  } = props;

  const {
    city, tempC, wind, condition
  } = weather;

  return (
    <div className="weather">
      <table>
        <tbody>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Wind (kph)</th>
            <th>Condition</th>
          </tr>
          <tr>
            <td>{city}</td>
            <td>{tempC}</td>
            <td>{wind}</td>
            <td>{condition}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default withWeather(ApiComponent);

ApiComponent.propTypes = {
  weather: PropTypes.shape({
    city: PropTypes.string,
    tempC: PropTypes.number,
    wind: PropTypes.number,
    condition: PropTypes.string
  })
};

ApiComponent.defaultProps = {
  weather: {
    city: '',
    tempC: 0,
    wind: 0,
    condition: ''
  }
};
