import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

 
 const initialState={
    cart:[],
    cartTotalQuantity:0,
    cartTotalamount:0,
}
  export const cartslice=createSlice({
    
    name:'cart',
    initialState,
    reducers:{
        // for add items to cart
        addCart:(state,action)=>{
            const itemIndex=state.cart.findIndex((item)=>item.id===action.payload.id);
            if(itemIndex>=0){
                state.cart[itemIndex].cartTotalQuantity+=1;
                
                toast.info(`${action.payload.name} is added again`,{
                    position:"bottom-left"
                })
            }else{
            const tempProduct={...action.payload,cartTotalQuantity:1};
            state.cart.push(tempProduct);
            toast.success(`${action.payload.name} is Added to  Cart`,{
                position:"bottom-left"
            })
            }
        },
        // for Remove items from cart
        removeCart:(state,action)=>{
            const itemIndex=state.cart.findIndex((item)=>item.id===action.payload.id);
            state.cart=state.cart.filter(item=>item.id!==action.payload.id);
            toast.error(`${action.payload.name} is Remove From  Cart`,{
                position:"bottom-left"
            })
    
        }

    }
    
 })

 export default cartslice.reducer;
 export const{ addCart,removeCart}=cartslice.actions;