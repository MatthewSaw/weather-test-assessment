import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions';

import { fetchWeatherApi } from '../services/api';
import { Container, Button, Box, TextField, MenuItem } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();
const cities = [
  {
    label: 'Kuala Lumpur',
    value: 'Kuala Lumpur',
  },
  {
    label: 'Singapore',
    value: 'Singapore',
  },
];

const Home = (props) => {
  const history = useHistory();
  const [ city, selectCity ] = useState('');
  const [ apiKey, setApiKey ] = useState('');
  const [ errorApiKey, setErrorApiKey ] = useState(false);
  const [ errorCity, setErrorCity] = useState(false);

  const handleCity = (e) => {
    selectCity(e.target.value);
    setErrorCity(false);
  }

  const handleApiKey = (event) => {
    setApiKey(event.target.value);
    setErrorApiKey(false);
  }

  const handleSubmit = async (event) => {
      event.preventDefault();

      if (apiKey==='') {
        setErrorApiKey(true);
      }
      if (city==='') {
        setErrorCity(true);
      }

      if (apiKey!=='' && city!=='') {
        const result = await fetchWeatherApi(apiKey, city);
        const { data, status } = result;

        if (status === 200) {
          console.log(data);
          props.fetchWeather(data);
          history.push('/result');
        }
      }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box component="div">
          <TextField
            margin="normal"
            required
            fullWidth
            id='apiKey'
            label='API Key'
            name='apiKey'
            value={apiKey}
            onChange={handleApiKey}
            error={errorApiKey}
            helperText={(errorApiKey)?"Please enter an API Key":''}
          />
          <TextField
            id="outline-select-city" 
            select
            fullWidth
            label="Select a City"
            value={city}
            onChange={handleCity}
            error={errorCity}
            helperText={(errorCity)?"Please select a city":''}
          >
            {
              cities.map((city) => (
                <MenuItem key={city.value} value={city.value}>
                  {city.label}
                </MenuItem>
              ))
            }
          </TextField>
          <Button onClick={(e)=>handleSubmit(e)} fullWidth variant="contained" sx={{ mt:3, mb:2 }}>Submit</Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = dispatch => ({
  fetchWeather: data => dispatch({ type: Actions.FETCH_WEATHER, payload:data })
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);