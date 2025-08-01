import React from "react";
import { useDispatch } from "react-redux";
import { weatherThunk } from "../redux/Thunk/weatherThunk";
import { Box, Button, Container, TextField } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import CustomDialogue from "../components/CustomDialogue";

export default function Weather() {
  const [place, setPlace] = useState("");
  const [open, setOpen] = useState(false);
  const { weather, loading, error } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  async function searchHandle() {
    dispatch(weatherThunk(place))
      .unwrap()
      .then(() => setOpen(true));
  }
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 1,
            mt: 3,
            justifyContent: "center",
            height: 54,
          }}
        >
          <TextField
            sx={{
              height: "100%",
            }}
            label="Place"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            {...(error.flag ? { error: true, helperText: error.message } : {})}
          />
          <Button
            onClick={searchHandle}
            variant="contained"
            sx={{
              height: "100%",
            }}
            loading={loading}
            loadingPosition="start"
          >
            Search
          </Button>
        </Box>
        <CustomDialogue
          setOpen={setOpen}
          open={open}
          Data={Object.entries(weather)}
        />
      </Box>
    </Container>
  );
}
