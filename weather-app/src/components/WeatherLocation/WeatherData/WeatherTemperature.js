import React from 'react';
import WeatherIcons from 'react-weathericons'
import PropTypes from 'prop-types'
import{
    CLOUD,      
    SUN,    
    RAIN,   
    SNOW,   
    THUNDER,
    DRIZZLE,    
} from './../../../constants/weathers';
import './styles.css';
const icons ={
    [CLOUD]: "cloud",    
    [SUN]:"day-sunny",
    [RAIN]:"rain",
    [SNOW]:"snow",
    [THUNDER]:"day-thunderstorm" ,
    [DRIZZLE]: "day-showers",    
}


const getWeatherIcon = wheaterState =>{
    
    const icon = icons[wheaterState];
    const sizeIcon ="4x";
    if(icon)
        return <WeatherIcons name={icon} size={sizeIcon}></WeatherIcons>;
    else
        return <WeatherIcons name={"day-sunny"} size={sizeIcon}></WeatherIcons>;
}

const WeatherTemperature = ({temperature, wheaterState}) => {

    
    return <div className="weatherTemperatureCont">
        {
            getWeatherIcon(wheaterState)
        }
        <span className="temperature">{` ${temperature}`}</span> 
        <span className="temperatureType">{` C°`}</span>
    </div>
}
    


WeatherTemperature.propTypes = {
    temperature: PropTypes.number,
    wheaterState: PropTypes.string.isRequired,
}

export default WeatherTemperature;