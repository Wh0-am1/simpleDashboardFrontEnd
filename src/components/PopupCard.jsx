import { Box, Paper } from "@mui/material";
import Gif from "../assets/pop.gif";
import React from "react";
import { Icon } from "@iconify/react";

export default function PopupCard() {
    return (
        <Box
            sx={{
                position: "relative",
            }}
        >
            <Paper
                elevation={8}
                sx={{
                    position: "absolute",
                    p: 1.5,
                    borderRadius: "30px",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    backgroundColor: "rgba(0, 0, 0 )",
                    color: "white",
                }}
            >
                <Icon icon="line-md:play-filled" width="34" height="34" />
            </Paper>
            <Paper
                elevation={6}
                component="img"
                src={Gif}
                alt="video"
                sx={{
                    borderRadius: 8,
                    width: "100%",
                    height: "250px",
                    ":hover": { filter: "blur(3px)" },
                }}
            />
        </Box>
    );
}
