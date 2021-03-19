import React from 'react';

class ApiComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            temp_c: 0,
            wind: 0,
            condition: ""
        };
    }

    componentDidMount() {
        fetch("http://api.weatherapi.com/v1/current.json?key=383fb6228215411ead5215805211903&q=London&aqi=no")
        .then( response => response.json())
        .then( (response) => {
            this.setState({
                city: response.location.name,
                temp_c: response.current.temp_c,
                wind: response.current.wind_kph,
                condition: response.current.condition.text
            });
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const {city, temp_c, wind, condition} = this.state;
        return (
            <div className = "weather">
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
                            <td>{temp_c}</td>
                            <td>{wind}</td>
                            <td>{condition}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ApiComponent;