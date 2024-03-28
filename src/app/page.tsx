'use client'
import React, { useState } from "react";
import { Typography, Button } from "@mui/material";
import Navbar from "./components/Navbar";
import { useGetBlogListQuery } from '../app/blogStore/query'
import { GetTopHeadlinesParams } from '../app/blogStore/Types/blogsTypes'
export default function Home() {
  const [queryParams, setQueryParams] = useState<GetTopHeadlinesParams>(
    {
      country: "in",
      category: "general",
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      page: 1,
      pageSize: 10
    }
  )
  const { data, isLoading, isError } = useGetBlogListQuery(queryParams);
  console.log('data :>> ', data);
  console.log('isError :>> ', isError);
  console.log('isLoading :>> ', isLoading);
  console.log('process.env.NEXT_PUBLIC_API_KEY', process.env.NEXT_PUBLIC_API_KEY)
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
