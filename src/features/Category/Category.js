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
            query: ({slug,access_token}) => {
                console.log(slug)
                console.log(access_token)
                return {
                    url: `add-to-cart/${slug}/`,
                    method: "POST",
                    headers: {
                    'authorization':`Bearer ${access_token}`,
                }
            }
                }
        }),
        registerUser: builder.mutation({
            query:(user) => {
                return {
                    url:'register-user/',
                    method:'POST',
                    body:user,
                    headers: {
                        'Content-type':'application/json',
                    }
                }
            }
        }),
        loginUser: builder.mutation({
            query:(user) => {
                return {
                    url:'login/',
                    method:"POST",
                    body:user,
                    headers: {
                        'Content-type':'application/json',
                    }
                }
            }
        })
    })

})
export const { useGetAllCategoryQuery , useGetAllProductQuery,useGetAllProdutByIdQuery,useAddProductMutation,useRegisterUserMutation,useLoginUserMutation} = categoryApi