import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {PropTypes} from 'prop-types'
import transformWeather  from './../../services/transformWeather';

import Location from './Location';
import WeatherData from './WeatherData';
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';


class WeatherLocation extends Component {    
    constructor(props){
        super(props);
        const {city} = props;
        this.state  ={
            city,
            data: null,
        };

        
    }    

    componentDidMount() {
        
        this.handleupdateClick();
    }
    
    componentDidUpdate(prevProps, prevState) {
        
        
    }
    
    handleupdateClick = () =>{
        const api_weather = getUrlWeatherByCity(this.state.city)
        fetch(api_weather).then(resolve=>{
            return resolve.json();
        }).then(data=>{
            const newWeather = transformWeather(data);
            
            
            this.setState({
                city: data.name,
                data:newWeather,
            });
        });        
    }
    render(){
        const { onWeatherLocationClick} =this.props;
        const {city, data} = this.state;
        
         
    return(<div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city}></Location>
                {data ? <WeatherData data={data}></WeatherData>: 
                <CircularProgress size={50}></CircularProgress>
                }
                
            </div>

            );
    }
}

WeatherLocation.propType = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick : PropTypes.func,
}
export default WeatherLocation;