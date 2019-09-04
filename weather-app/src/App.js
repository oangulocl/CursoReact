import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Tooolbar from '@material-ui/core/Toolbar'
import './App.css';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended'

import {Grid,Col,Row} from 'react-flexbox-grid';

const cities=[
  'Buenos Aires,ar',
  'San Pedro,cl',
  'Maipú,cl',
]

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {city: null}
    
  }
  
  handleSelectionLocation = city =>{
    this.setState(
      {city}
    );

    console.log(`handleSelectionLocation ${city}`);
  }

  render(){
    const {city} = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position="sticky">
            <Tooolbar>
              <Typography variant="subtitle1" color="inherit">
                Weather App
              </Typography>
            </Tooolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>        
            <LocationList 
              cities={cities}
              onSelectedLocation={this.handleSelectionLocation}>
            </LocationList>        
          </Col>
          <Col xs={12} md={6}>        
          <Paper elevation={4}>
            <div className='details'>
              {
                city &&
                <ForecastExtended city={city}></ForecastExtended>
                
                  
                  
                  
                }
              
            </div>            
          </Paper>
          
          </Col>

        </Row>
        
      </Grid>
    );
  }
}


export default App;
