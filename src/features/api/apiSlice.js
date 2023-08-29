import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => "/restaurants",
    }),
    getSingleRestaurant: builder.query({
      query: (id) => `/restaurants/${id}`,
    }),
  }),
});

export const { useGetRestaurantsQuery, useGetSingleRestaurantQuery } = apiSlice;
