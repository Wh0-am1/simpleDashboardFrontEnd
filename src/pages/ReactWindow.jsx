import { Container } from "@mui/material";
import { FixedSizeList as List } from "react-window";

const Row = ({ index, style }) => <div style={style}>Row {index}</div>;

export default function ReactWindow() {
    return (
        <Container
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <List height={550} itemCount={1000} itemSize={35} width={300}>
                {Row}
            </List>
        </Container>
    );
}
