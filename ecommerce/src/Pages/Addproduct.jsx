import { useState } from "react";
import { useAddNewProductMutation, useLazyGetAllProductsQuery } from "../services/productApi";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";



function Addproducts(){
    const [getProductfromAPi]=useAddNewProductMutation();
    const [refetch]=useLazyGetAllProductsQuery();
    const navigate=useNavigate();
    const [addProduct,setAddNewProduct]=useState({
        name:"",
        brand:"",
        discription:"",
        price:"",
        material:"",
        image_url:""

    })

//  add product functionality user click this new one is added
    function handleAdd(){
        getProductfromAPi(addProduct).then(()=>{
            toast.success(`${addProduct.name} item is added Sucessfully`,{
                position:"bottom-left"
            })
        refetch();
        })
        navigate('/ecommerce');

    }
    
    return(
        <>
        <h1 className="text-center addproducts_heading text-primary">Add New Products</h1>
        <div className="addproducts_container"> 
        <div className="addproducts_form">
            <div className="addproducts_card"> 
            <form>
                <div className="place_text">Product Name</div>
                <input type="text" className="textarea" onChange={(e)=>{setAddNewProduct({...addProduct,name:e.target.value})}} placeholder="Enter Product Name..." required />
                <div className="place_text">Brand</div>
                <input type="text" className="textarea" onChange={(e)=>{setAddNewProduct({...addProduct,brand:e.target.value})}}  placeholder="Enter Brand..." required/>
                <div className="place_text">Image_url</div>
                <input type="text" className="textarea" onChange={(e)=>{setAddNewProduct({...addProduct,image_url:e.target.value})}} placeholder="Enter image_url..." required/>
                <div className="place_text">Price</div>
                <input type="text" className="textarea" onChange={(e)=>{setAddNewProduct({...addProduct,price:e.target.value})}} placeholder="Enter Price..." required/>
                <div className="place_text">Material</div>
                <input type="text" className="textarea" onChange={(e)=>{setAddNewProduct({...addProduct,material:e.target.value})}} placeholder="Enter Material..." required/>
                <div className="place_text">Discription</div>
                <textarea className="mt-3 textarea" onChange={(e)=>{setAddNewProduct({...addProduct,discription:e.target.value})}}  cols="38" placeholder="Enter discription.." rows="2"  ></textarea>
                <button className="btn btn-info d-flex m-auto mt-3" onClick={handleAdd}>Add Product</button>
            </form>
        </div>
        </div>
        </div>
        </>
    )
}
export default Addproducts;