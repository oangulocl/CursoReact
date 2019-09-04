import React from 'react';
import './style.css'
const Location = ({city})=>{ 
    //Destructuring

    //const {city} = props;

    return (
        <div className="locationCont"><h1>{city}</h1></div>
        );
}
    


export default Location;