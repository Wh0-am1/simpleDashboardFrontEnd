import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        textAlign: "center",
        paddingTop: "10%",
      }}
    >
      <Typography variant="h1" component="div" gutterBottom color="error">
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Oops! The page you are looking for doesn't exist.
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        You might have mistyped the address or the page may have moved.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/dashboard")}
      >
        Go to Homepage
      </Button>
    </Box>
  );
};

export default NotFound;
