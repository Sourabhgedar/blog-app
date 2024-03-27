import { Typography, Button } from "@mui/material";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Typography variant="h1">
        Hello world
      </Typography>
      <Button variant="contained">
        Click
      </Button>
    </>
  );
}
