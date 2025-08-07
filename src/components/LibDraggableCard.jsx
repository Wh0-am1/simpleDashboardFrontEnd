import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function LibDraggableCard({ task, opacity }) {
  console.log(opacity);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  return (
    <Box
      sx={{ p: 1, border: "1px solid black", borderRadius: 10, opacity }}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      <Typography>{task.title}</Typography>
    </Box>
  );
}
