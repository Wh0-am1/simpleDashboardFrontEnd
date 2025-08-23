import { Container, Box, Typography } from "@mui/material";
import React from "react";
import PurchasedCard from "../components/PurchasedCard";
import { useSelector } from "react-redux";
import GlobalDialogue from "../components/GlobalDialogue";
import GlobalFormComponent from "../components/GlobalFormComponent";
import { useState } from "react";

export default function Purchased() {
    const [open, setOpen] = useState(true);
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

    const purchased = useSelector((state) => state.purchased);
    return (
        <Container>
            <Typography variant="h3" mb={2}>
                Purchased
            </Typography>
            {purchased.length > 0 ? (
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                    }}
                >
                    {purchased.map((e) => (
                        <PurchasedCard product={e} />
                    ))}
                </Box>
            ) : (
                <Box>
                    <Typography>Nothing in Purchased</Typography>
                </Box>
            )}
            <GlobalDialogue
                Data={data}
                open={open}
                setOpen={setOpen}
                Global={GlobalFormComponent}
            />
        </Container>
    );
}
