import React,  {Component} from 'react';
import {PropTypes} from 'prop-types';
import ForecastItem from './ForecastItem';

import transformForecast  from './../services/transformForecast';
import './styles.css';

/*const days=[
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
]
const data ={
    temperature: 10,
    humidity : 10,
    weatherState: 'normal',
    wind:'normal',
 }*/


export const api_key = "c3e5c07197d72f95892e36b7a808f87d";
export const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component{

    constructor(){
        super();
        this.state={
            forecastData :null,
        }
    }
    componentDidMount(){
        //fetch or axios
        const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;

        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log (weather_data)
                const forecastData = transformForecast(weather_data);
                this.setState({forecastData})
            }
        )
        ;
    }

    renderForecastItemDays(){
        return "Render itemsss";
       // return days.map(day => (<ForecastItem weekDay={day} hour={10} data={data}></ForecastItem>))
        
    }

    renderProgress =()=>{
        return <h3>Cargando Pronóstico Extendido...</h3>;
    }

    render(){
        const {city} = this.props;

        const { forecastData} = this.state;
        return   (<div>
            <h2 className='forecast-title'>Pronóstico Extendido para {city}</h2>
            {forecastData ? this.renderForecastItemDays():
            this.renderProgress()}
        </div>)
    };
}


ForecastExtended.propType = {
    city:PropTypes.string.isRequired,
    
}
export default ForecastExtended;