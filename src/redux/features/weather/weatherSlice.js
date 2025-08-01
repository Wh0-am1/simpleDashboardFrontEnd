import { createSlice } from "@reduxjs/toolkit";
import { weatherThunk } from "../../Thunk/weatherThunk";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    loading: false,
    error: { flag: false, message: "" },
    weather: {
      type: "",
      description: "",
      temp: "",
      place: "",
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(weatherThunk.pending, (state, action) => {
        state.loading = true;
        state.error.flag = false;
      })
      .addCase(weatherThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error.flag = false;
        state.weather = {
          place: action.payload.name,
          type: action.payload.weather[0].main,
          description: action.payload.weather[0].description,
          temp: (action.payload.main.temp - 273.15).toFixed(2) + "°C",
        };
      })
      .addCase(weatherThunk.rejected, (state, action) => {
        state.error.flag = true;
        state.loading = false;
        state.error.message = action.payload;
        state.weather = {
          type: "",
          description: "",
          temp: "",
          place: "",
        };
      });
  },
});

export default weatherSlice.reducer;
