import { CreateApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = CreateApi({
  reducerPatch: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({}),
});
