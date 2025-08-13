import { Icon } from "@iconify/react";
import {
    Box,
    Checkbox,
    Dialog,
    FormControlLabel,
    FormGroup,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";

export default function GlobalDialogue({ open, setOpen, Data }) {
    const [Tempopen, settempOpen] = useState(true);

    const HandleClose = () => {
        settempOpen(false);
    };

    const data = {
        title: {
            "Lunch Marking Hours": "2PM to 12AM",
            "Evening Food Marking Hours": "10 AM to 3 PM",
        },
        body: [
            { bodyTitle: "Lunch Tommorrow", checkBox: false },
            { bodyTitle: "Food For Evenening", checkBox: true },
        ],
        close: true,
    };
    return (
        <Dialog
            open={Tempopen}
            sx={{
                px: { xs: 5, md: 10 },
            }}
            slotProps={{
                paper: {
                    sx: {
                        borderRadius: 4,
                        minWidth: { xs: "100%", lg: 900 },
                    },
                },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 5,
                    bgcolor: "#f4f6f8",
                    p: 2,
                    borderBottom: "0.2px solid #e5e8eb",
                }}
            >
                <Box>
                    {Object.entries(data.title).map(([key, value], index) => (
                        <Stack direction={"row"} gap={1} key={index}>
                            <Typography>{`${key} :`}</Typography>
                            <Typography>{value}</Typography>
                        </Stack>
                    ))}
                </Box>
                {data.close && (
                    <IconButton onClick={HandleClose}>
                        <Icon icon="carbon:close-filled" width="22" height="22" />
                    </IconButton>
                )}
            </Box>
            <Box
                sx={{
                    p: 2,
                }}
            >
                <FormGroup>
                    {data.body.map((e, index) => (
                        <FormControlLabel
                            key={index}
                            control={<Checkbox disabled={e.checkBox} />}
                            label={e.bodyTitle}
                        />
                    ))}
                </FormGroup>
            </Box>
        </Dialog>
    );
}
