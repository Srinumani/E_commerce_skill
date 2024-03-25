import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsAPi } from "../services/productApi";
import cartSlice from "./cartSlice";
 

export const store=configureStore({
    reducer:{
        cart:cartSlice,
        [productsAPi.reducerPath]:productsAPi.reducer,
        
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(productsAPi.middleware),
})

setupListeners(store.dispatch)