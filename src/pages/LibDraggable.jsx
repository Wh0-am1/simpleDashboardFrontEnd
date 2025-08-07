import { closestCorners, DndContext } from "@dnd-kit/core";
import { Box, Container } from "@mui/material";
import { useState } from "react";
import LibTaskList from "../components/LibTaskList";

export default function LibDraggable() {
  const [task, setTask] = useState([
    {
      id: "f1",
      title: "first",
      box: 1,
    },
    { id: "f2", title: "second", box: 1 },
    { id: "f3", title: "third", box: 1 },
    {
      id: "s1",
      title: "first@",
      box: 2,
    },
    { id: "s2", title: "second@", box: 2 },
    { id: "s3", title: "third@", box: 2 },
  ]);

  const HandleDragEnd = ({ active, over }) => {
    if (active.id === over.id) return;
    if ([1, 2].includes(active.id)) return;

    const activeIndex = active.data.current.sortable.index;
    const overIndex = over.data.current.sortable.index;
    const filtered = task.filter((e) => e.id != active.id);
    const data = task[activeIndex];

    if ([1, 2].includes(over.id)) {
      data.box = over.id;
      filtered.splice(overIndex, 0, data);
      setTask(filtered);
      return;
    }

    const data2 = task[overIndex];
    data.box = data2.box;

    filtered.splice(overIndex, 0, data);
    setTask(filtered);
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          gap: 1,
        }}
      >
        <DndContext
          collisionDetection={closestCorners}
          onDragEnd={HandleDragEnd}
        >
          <LibTaskList task={task} sec={1} />
          <LibTaskList task={task} sec={2} />
        </DndContext>
      </Box>
    </Container>
  );
}
