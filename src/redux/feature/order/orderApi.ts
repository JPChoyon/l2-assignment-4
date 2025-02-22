import baseApi from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrdersByUser: builder.query({
      query: (email) => ({
        url: `/orders?email=${email}`,
        method: "GET",
      }),
    }),
    getOrderById: builder.query({
      query: (orderId) => ({
        url: `/orders/${orderId}`,
        method: "GET",
      }),
    }),
    placeOrder: builder.mutation({
      query: (orderData) => ({
        url: "/orders",
        method: "POST",
        body: orderData,
      }),
    }),

    cancelOrder: builder.mutation({
      query: (orderId) => ({
        url: `/orders/${orderId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetOrdersByUserQuery,
  usePlaceOrderMutation,
  useCancelOrderMutation,
  useGetOrderByIdQuery,
} = orderApi;
export default orderApi;
