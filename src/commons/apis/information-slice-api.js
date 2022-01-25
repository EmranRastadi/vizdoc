import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants/Types';

export const serviceApi = createApi({
  reducerPath: 'services',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders(headers) {
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchService: builder.query({
      query: () => `/service/1`,
      providesTags: ['service'],
    }),
    fetchLabels: builder.query({
      query: (filterItem) => {
        const urlMake = new URLSearchParams();
        Object.entries(filterItem).map(([key, value]) => {
          urlMake.append(key, value);
        });
        return {
          url: `/service/word/suggestion/`,
          method: 'POST',
          params: urlMake,
        };
      },
      providesTags: ['labels'],
    }),
  }),
});

export const { useFetchServiceQuery, useFetchLabelsQuery } = serviceApi;
