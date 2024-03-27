'use client'
import { Typography, Button } from "@mui/material";
import Navbar from "./components/Navbar";
import { useGetBlogListQuery } from '../app/blogStore/query'
export default function Home() {
  const { data , isLoading , isError } = useGetBlogListQuery();
    console.log('data :>> ', data);
    console.log('isError :>> ', isError);
    console.log('isLoading :>> ', isLoading);
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
