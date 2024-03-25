import { useEffect, useState } from "react"
import { useLazyGetAllProductsQuery, useUpdateProductsMutation } from "../services/productApi"
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";


function Updateproducts(){
    const {state}=useLocation();
    const [updateExistingProduct]=useUpdateProductsMutation();
    const [refetch]=useLazyGetAllProductsQuery();
    const navigate=useNavigate();
    const [selectedProduct,setNewSelectedProduct]=useState({
        name:"",
        brand:"",
        discription:"",
        price:"",
        material:"",
        image_url:""
    })

    useEffect(()=>{
        setNewSelectedProduct({...state})
    },[state]);
// updating the existing product details when user click it
    function handleUpdateProduct(){
        updateExistingProduct(selectedProduct).then(()=>{
            toast.info(`${selectedProduct.name} item is updated`,{
                position:"bottom-left"
            });
            refetch();
        })
        navigate('/ecommerce');


    }

    return(
        <>
        <h1 className="text-center addproducts_heading text-primary">Update Existing Products</h1>
        <div className="addproducts_container"> 
        <div className="addproducts_form">
            <div className="addproducts_card"> 
            <form>
                <div className="place_text">Product Name</div>
                <input type="text" className="textarea" value={selectedProduct.name} onChange={(e)=>{setNewSelectedProduct({...selectedProduct,name:e.target.value})}} placeholder="Enter Product Name..." required/>
                <div className="place_text">Brand</div>
                <input type="text" className="textarea" value={selectedProduct.brand} onChange={(e)=>{setNewSelectedProduct({...selectedProduct,brand:e.target.value})}}  placeholder="Enter Brand..." required/>
                <div className="place_text">Image_url</div>
                <input type="text" className="textarea" value={selectedProduct.image_url} onChange={(e)=>{setNewSelectedProduct({...selectedProduct,image_url:e.target.value})}} placeholder="Enter image_url..."/>
                <div className="place_text">Price</div>
                <input type="text" className="textarea" value={selectedProduct.price} onChange={(e)=>{setNewSelectedProduct({...selectedProduct,price:e.target.value})}} placeholder="Enter Price..."/>
                <div className="place_text">Material</div>
                <input type="text" className="textarea" value={selectedProduct.material} onChange={(e)=>{setNewSelectedProduct({...selectedProduct,material:e.target.value})}} placeholder="Enter Material..."/>
                <div className="place_text">Discription</div>
                <textarea className="mt-3 textarea" value={selectedProduct.discription} onChange={(e)=>{setNewSelectedProduct({...selectedProduct,discription:e.target.value})}}   cols="38" placeholder="Enter discription.." rows="2"  ></textarea>
 
                <button className="btn btn-info d-flex m-auto mt-3" onClick={handleUpdateProduct}>Update Product</button>
            </form>
        </div>
        </div>
    </div>


        </>
    )
}
export default Updateproducts;