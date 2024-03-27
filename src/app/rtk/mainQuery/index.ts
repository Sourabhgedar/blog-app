import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: "https://jsonplaceholder.typicode.com/"
});

export const blogApiSlice = createApi({
  reducerPath: 'mainQuery',
  baseQuery,
  endpoints: () => ({}),
  refetchOnReconnect: true,
});
