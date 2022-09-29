import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {IGoods} from 'models/goods'

import {DtoAddProduct} from './dto'




export const goodsApi = createApi({
  reducerPath: 'goodsApi',
  tagTypes: ['Products'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001'
  }),
  endpoints: build => ({
    getGoods: build.query<IGoods[], string>({
      query: (limit: string) => ({
        url: 'goods',
        params: {
          _limit: limit
        }
      }),
      providesTags: result => ['Products']
    }),
    addProduct: build.mutation<any, DtoAddProduct>({
      query: body => ({
        url: 'goods',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Products']
    }),
    delProduct: build.mutation<any, number>({
      query: (id: number) => ({
        url: `goods/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Products']
    })
  })
})

export const {useGetGoodsQuery, useAddProductMutation, useDelProductMutation} =
  goodsApi
