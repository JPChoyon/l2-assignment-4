import baseApi from "../../api/baseApi";

const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCar: builder.query({
      query: () => ({
        url: "/cars",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllCarQuery } = carApi;
