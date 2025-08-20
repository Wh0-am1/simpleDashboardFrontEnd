import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LocationThunk } from "../redux/features/locationSlice";
import { useSelector } from "react-redux";
import DependedField from "../components/DependedField";
import { setCity, setState, setCountry } from "../redux/features/locationSlice";

export default function DependDropDown() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.location.countries);
  const states = useSelector((state) => state.location.states);
  const cities = useSelector((state) => state.location.cities);
  const loading = useSelector((state) => state.location.loading);
  const error = useSelector((state) => state.location.error);

  const selectCountry = useSelector((state) => state.location.selectedCountry);
  const selectState = useSelector((state) => state.location.selectedState);
  const selectCity = useSelector((state) => state.location.selectedCity);
  useEffect(() => {
    dispatch(LocationThunk({ url: "positions" }));
  }, []);
  return (
    <Container>
      <Typography textAlign={"center"} variant="h3" fontWeight={"bolder"}>
        Depended DropDown
      </Typography>
      <Box
        display={"flex"}
        sx={{
          mt: 4,
          flexDirection: "column",
          gap: 1,
        }}
      >
        <DependedField
          options={countries}
          label={"Select Country"}
          action={setCountry}
          url={"states"}
          loc={"country"}
        />
        <DependedField
          options={states}
          loading={!selectState && loading}
          label={"Select State"}
          disable={selectCountry ? false : true}
          action={setState}
          body={{ country: selectCountry }}
          url={"state/cities"}
          loc={"state"}
        />
        <DependedField
          options={cities}
          loading={loading}
          label={"Select Cities"}
          disable={selectState ? false : true}
          action={setCity}
        />
        <Typography color="error">{error}</Typography>
        {selectCity && (
          <Typography>
            You selected : {selectCountry + " > "} {selectState + " > "}
            {selectCity}
          </Typography>
        )}{" "}
      </Box>
    </Container>
  );
}
