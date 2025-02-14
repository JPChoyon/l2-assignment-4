import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://assignment-2-smoky-kappa.vercel.app/api",
    credentials:"include",
  }),
  endpoints: () => ({}),
});
export default baseApi;
