import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (priority) => {
        const params = new URLSearchParams();

        if (priority) {
          params.append("priority", priority);
        }
        return {
          url: "/tasks",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["todo"],
    }),

    addTodos: builder.mutation({
      query: (data) => {
        console.log("inside base api:", data);
        return {
          url: "/task",
          method: "POST",
          body: data, // we must send an object as body
        };
      },
      invalidatesTags: ["todo"],
    }),

    updateTodos: builder.mutation({
      query: (options) => {
        console.log("inside base api:", options);
        return {
          url: `/task/${options.id}}`,
          method: "PUT",
          body: options.data,
        };
      },
      invalidatesTags: ["todo"],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodosMutation, useUpdateTodosMutation } =
  baseApi;
