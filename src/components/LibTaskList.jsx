import { Box, Container, Typography } from "@mui/material";
import React from "react";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import LibDraggableCard from "./LibDraggableCard";
export default function LibTaskList({ task, sec }) {
  let flag = true;
  task.forEach((element) => {
    if (element.box == sec) {
      flag = false;
      return;
    }
  });

  const Task = flag ? [{ id: sec, title: "drop here", box: sec }] : task;
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        bgcolor: "tan",
        p: 2,
        minHeight: 300,
        maxHeight: "100%",
        borderRadius: 10,
      }}
    >
      <SortableContext items={task} strategy={verticalListSortingStrategy}>
        {Task.map((e) => {
          if (e.box == sec)
            return (
              <LibDraggableCard task={e} key={e.id} opacity={flag ? 0 : 1} />
            );
        })}
      </SortableContext>
    </Container>
  );
}
