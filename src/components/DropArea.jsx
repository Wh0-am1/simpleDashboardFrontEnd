import { Box } from "@mui/material";
import { useState } from "react";

const DropArea = ({ active, setTask, box, index }) => {
  const [show, setShow] = useState(false);
  return (
    <Box
      sx={{
        opacity: `${show ? 1 : 0}`,
      }}
      onDragLeave={() => {
        setShow(false);
      }}
      onDragEnter={() => {
        setShow(true);
      }}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={() => {
        setTask((prev) => {
          const data = prev[active.box][active.id];

          const filtered = {
            ...prev,
            [active.box]: prev[active.box].filter(
              (e, index) => index !== active.id,
            ),
          };

          const dt = [...filtered[box]];
          dt.splice(index, 0, data);

          return { ...filtered, [box]: dt };
        });
        setShow(false);
      }}
    >
      Drop here
    </Box>
  );
};

export default DropArea;
