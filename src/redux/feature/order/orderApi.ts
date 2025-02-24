import baseApi from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrdersByUser: builder.query({
      query: (email) => ({
        url: `/orders?email=${email}`,
        method: "GET",
      }),
    }),
    getAllOrder: builder.query({
      query: () => ({
        url: `/orders`,
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
    verifyOrder: builder.query({
      query: (order_id) => ({
        url: "/orders/verify",
        params: { order_id },
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetOrdersByUserQuery,
  usePlaceOrderMutation,
  useGetOrderByIdQuery,
  useVerifyOrderQuery,
  useGetAllOrderQuery,
} = orderApi;
export default orderApi;
