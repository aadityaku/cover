import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const categoryApi = createApi({
    reducerPath:'categoryApi',

    baseQuery: fetchBaseQuery({
        baseUrl:'http://127.0.0.1:8000/api/'
    }),
    endpoints: (builder) => ({
        getAllCategory: builder.query({
            query: () => ({
                url: 'category/',
                method: 'GET'
            })
        }),
        getAllProduct: builder.query({
            query: () => ({
                url:'product/',
                method: "GET"
            })
        }),
        getAllProdutById: builder.query({
            query: (id) => ({
                url: `product/${id}/`,
                method: "GET"
            })
        }),
        addProduct: builder.mutation({
            query: (update) => ({
                url: `add-to-cart/${update}/`,
                method: "PUT",
                body: update,
                headers: {
                    "Content-type": 'application/json; charset=UTF-8',
                }
            })
        })
    })

})
export const { useGetAllCategoryQuery , useGetAllProductQuery,useGetAllProdutByIdQuery,useAddProductMutation} = categoryApi