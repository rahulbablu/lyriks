import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key','3e12512338msh245d990586fa728p1688afjsn96bf4ddeb4c0');
                return headers;
            },
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({query: () =>'/charts/world'}),
        }),
    });

    export const { useGetTopChartsQuery } = shazamCoreApi;