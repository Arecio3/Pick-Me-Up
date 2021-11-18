import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // Point A
    origin: null,
    // Point B
    destination: null,
    // Time that it takes
    travelTimeInformation: null
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    // Dispatch Actions
    reducers: {
        // Actions
        // state = state of origin, action = dispatch to data   
        setOrigin: (state, action) => {
            // change state to info in the action
            state.origin = action.payload;
        },

        setDestination: (state, action) => {
            state.destination = action.payload;
        },

        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        },
    },
});
// Allows us to use in entire app (Pushes Data)
export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions;

// Selectors (Pulls Data) grabs current value of data
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;