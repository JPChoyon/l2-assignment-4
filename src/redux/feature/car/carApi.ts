import baseApi from "../../api/baseApi";

const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCar: builder.query({
      query: () => ({
        url: "/cars",
        method: "GET",
      }),
    }),
    getCarById: builder.query({
      query: (id) => ({
        url: `/cars/${id}`,
        method: "GET",
      }),
    }),
    // New endpoint to create a car
    createCar: builder.mutation({
      query: (newCar) => ({
        url: "/cars",
        method: "POST",
        body: newCar,
      }),
    }),
  }),
});

export const { useGetAllCarQuery, useGetCarByIdQuery, useCreateCarMutation } =
  carApi;
