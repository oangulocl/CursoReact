import React from 'react';
import PropTypes  from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './styles.css'


const WeatherData = ({ data:{temperature,wheaterState,humidity, wind} }) => {

    
    return <div className="weatherDataCont">
        <WeatherTemperature 
                temperature={temperature} 
                wheaterState={wheaterState}></WeatherTemperature>
        <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>    
    </div>;
}
     



WeatherData.protoTypes={
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity:PropTypes.number.isRequired,
        wind:PropTypes.string.isRequired,
    }),
}
export default WeatherData;