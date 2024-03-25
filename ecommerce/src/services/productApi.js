import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

 
export const productsAPi=createApi({
  reducerPath: 'productsApi',
  // Get or Read defaultproducts
  baseQuery: fetchBaseQuery({ baseUrl:'http://localhost:8000/shirts' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ``,
    }),
  // post or Create products
  addNewProduct:builder.mutation({
    query:(newProduct)=>{
      return{
        url:``,
        method:'POST',
        body:newProduct
      }
    }
  }),
  //Update or Edit Products
   updateProducts:builder.mutation({
    query:((updateExistingProduct)=>{
      return{
        url:`/${updateExistingProduct.id}`,
        method:'PUT',
        body:updateExistingProduct
      }
    })
   }),
   
   //Delete or Remove Products

   deleteProducts:builder.mutation({
    query:((index)=>{
      return{
        url:`/${index}`,
        method:"DELETE",
      }
    })
   }),

}),
})

export const {
  useGetAllProductsQuery,
  useAddNewProductMutation,
  useLazyGetAllProductsQuery,
  useUpdateProductsMutation,
  useDeleteProductsMutation
}=productsAPi;

 
 