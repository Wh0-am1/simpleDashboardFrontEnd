import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import DraggableCard from "../components/DraggableCard";
import DropArea from "../components/DropArea";

const DraggablePage = () => {
    const data = {
        one: ["card1", "card2", "card3", "card4"],
        two: ["card5", "card6", "card8", "card9"],
    };
    const [active, setActive] = useState(null);
    const [task, setTask] = useState(data);

    return (
        <Container
            sx={{
                display: "flex",
                justifyContent: "center",
                gap: 3,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                }}
            >
                <DropArea active={active} index={0} setTask={setTask} box={"one"} />
                {task.one.map((e, key) => (
                    <Box key={key}>
                        <DraggableCard
                            text={e}
                            id={key}
                            setActive={setActive}
                            box={"one"}
                        />
                        <DropArea
                            active={active}
                            index={key + 1}
                            setTask={setTask}
                            box={"one"}
                        />
                    </Box>
                ))}
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                }}
            >
                <DropArea active={active} index={0} box={"two"} setTask={setTask} />
                {task.two.map((e, key) => (
                    <Box key={key}>
                        <DraggableCard text={e} id={key} setActive={setActive} box="two" />
                        <DropArea
                            active={active}
                            index={key + 1}
                            box={"two"}
                            setTask={setTask}
                        />
                    </Box>
                ))}
            </Box>
        </Container>
    );
};

export default DraggablePage;
