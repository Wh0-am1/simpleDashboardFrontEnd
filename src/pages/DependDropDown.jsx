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

    const { selectedCountry, selectedState, selectedCity } = useSelector(
        (state) => state.location,
    );

    console.log({ selectedCountry, selectedState, selectedCity });
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
                    selected={selectedCountry}
                />
                <DependedField
                    options={states}
                    loading={!selectedState && loading}
                    label={"Select State"}
                    disable={selectedCountry ? false : true}
                    action={setState}
                    body={{ country: selectedCountry }}
                    url={"state/cities"}
                    loc={"state"}
                    selected={selectedState}
                />
                <DependedField
                    options={cities}
                    loading={loading}
                    label={"Select Cities"}
                    disable={selectedState ? false : true}
                    action={setCity}
                    selected={selectedCity}
                />
                <Typography color="error">{error}</Typography>
                {selectedCity && (
                    <Typography>
                        You selecteded : {selectedCountry + " > "} {selectedState + " > "}
                        {selectedCity}
                    </Typography>
                )}{" "}
            </Box>
        </Container>
    );
}
