import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const LocationThunk = createAsyncThunk(
  "location/LocationThunk",
  async (payload, ThunkAPI) => {
    const url = payload.url;
    try {
      if (url == "positions") {
        const response = await axios.get(
          " https://countriesnow.space/api/v0.1/countries/positions",
        );
        return { res: response.data.data.map((e) => e.name), key: "countries" };
      } else {
        const response = await axios.post(
          "https://countriesnow.space/api/v0.1/countries/" + url,

          payload.body,
        );
        const key = payload.key;
        const res =
          key == "cities"
            ? response.data.data
            : response.data.data[key].map((e) => e.name);

        return res.length
          ? { res, key }
          : ThunkAPI.rejectWithValue("No Data Found");
      }
    } catch (e) {
      console.log(e);
    }
  },
);

const locationSlice = createSlice({
  name: "location",
  initialState: {
    countries: [],
    states: [],
    cities: [],
    selectedCountry: "",
    selectedState: "",
    selectedCity: "",
    loading: false,
    error: null,
  },
  reducers: {
    setCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
    setState: (state, action) => {
      state.selectedState = action.payload;
    },
    setCity: (state, action) => {
      state.selectedCity = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(LocationThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(LocationThunk.fulfilled, (state, action) => {
      state.loading = false;
      state[action.payload.key] = action.payload.res;
      state.error = null;
    });
    builder.addCase(LocationThunk.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const { setCountry, setState, setCity } = locationSlice.actions;
export default locationSlice.reducer;
