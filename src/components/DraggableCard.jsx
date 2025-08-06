import { Box, Typography } from "@mui/material";

const DraggableCard = ({ text, id, setActive, box }) => {
    return (
        <Box
            draggable
            sx={{
                p: 1,
                border: "1px solid black",
                borderRadius: 10,
            }}
            onDragLeave={() => setActive(null)}
            onDrag={() => setActive({ id: id, box: box })}
            onDragEnd={() => setActive(null)}
        >
            <Typography>{text}</Typography>
        </Box>
    );
};

export default DraggableCard;
