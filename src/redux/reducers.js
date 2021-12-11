import * as Actions from './actions';

const initialState = {
    data: {},
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.FETCH_WEATHER:
            const weatherData = { ...action.payload.current, ...action.payload.location };
            return { ...state, data: weatherData }
        default:
            return state;
    }
}
