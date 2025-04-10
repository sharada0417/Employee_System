// src/redux/employeeApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const employeeApi = createApi({
  reducerPath: 'employeeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/v1/employee/' }),
  endpoints: (builder) => ({
    saveEmployee: builder.mutation({
      query: (employeeData) => ({
        url: 'saveEmployee',
        method: 'POST',
        body: employeeData,
      }),
    }),
    // (Optional) add more endpoints here for update, fetch, delete if needed.
  }),
});

export const { useSaveEmployeeMutation } = employeeApi;
