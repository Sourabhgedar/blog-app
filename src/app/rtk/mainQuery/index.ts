import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL
});

export const blogApiSlice = createApi({
  reducerPath: 'mainQuery',
  baseQuery,
  endpoints: () => ({}),
  refetchOnReconnect: true,
});
