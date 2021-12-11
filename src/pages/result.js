import React from 'react';
import { connect } from 'react-redux';
import { Container, Box, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        text: {
            disabled: 'rgba(0,0,0,0.7)'
        },
    }
});


const result = (props) => {
    
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <Box component="div">
                    <TextField 
                        margin="normal"
                        fullWidth
                        id='celsius'
                        label='Celsius'
                        name='celsius'
                        value={`${props.data.temp_c}°C`}
                        disabled={true}
                    />
                    <TextField 
                        margin="normal"
                        fullWidth
                        id='fahrenheit'
                        label='Fahrenheit'
                        name='fahrenheit'
                        value={`${props.data.temp_f}°F`}
                        disabled={true}
                    />
                </Box>
            </Container>
        </ThemeProvider>
    )
}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(result);
