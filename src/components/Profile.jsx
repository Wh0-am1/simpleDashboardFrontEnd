import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";

export default function Profile() {
    const user = useSelector((state) => state.user.userName);
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                gap: 2,
            }}
        >
            <Avatar
                alt="img"
                sx={{
                    width: 80,
                    height: 80,
                }}
            />
            <Box
                sx={{
                    display: "flex",
                    gap: 1,
                }}
            >
                <Typography
                    sx={{
                        fontWeight: "700",
                    }}
                >
                    {user}
                </Typography>
                <Typography>|</Typography>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.2rem",
                    }}
                >
                    <Icon icon="emojione:star" width="16" height="16" />
                    <Typography
                        variant="subtitle2"
                        sx={{
                            textAlign: "center",
                        }}
                    >
                        4.3
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
