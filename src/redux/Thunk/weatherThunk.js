import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export const weatherThunk = createAsyncThunk(
    "weather/weatherThunk",
    async (place, thunkAPI) => {
        try {
            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${API_KEY}`,
            );
            return await res.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
    },
);
