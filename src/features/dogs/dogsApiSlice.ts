import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Breed } from './types';

const DOGS_API_KEY = '06764e46-3709-482d-9a03-006733e93be1';

export const dogsApi = createApi({
  reducerPath: 'dogsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thedogapi.com/v1',
    prepareHeaders(headers) {
      headers.set('x-api-key', DOGS_API_KEY);

      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<Breed[], number | void>({
        query(limit = 1) {
          return `/breeds?limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchBreedsQuery } = dogsApi;
