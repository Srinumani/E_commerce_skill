import { useNavigate } from "react-router-dom";
import {useDeleteProductsMutation, useGetAllProductsQuery, useLazyGetAllProductsQuery,   } from "../services/productApi";
import { useDispatch } from "react-redux";
import { addCart, removeCart } from "../app/cartSlice";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
 

function Ecommerce(){
    const dispatch=useDispatch();
    const [deleteProduct]=useDeleteProductsMutation();
    const [refetch]=useLazyGetAllProductsQuery();
    const navigate=useNavigate();
    const [open ,setOpen]=useState(false);
    const [sortOrder,setSortOrder]=useState('All');
    const items= ["Low To High","High to Low","All"];
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const {isLoading,data}=useGetAllProductsQuery();
    console.log("console",data);

// handle delete function ,it handles delete action
    function handleDelete(id){
        deleteProduct(id);
        toast.error("Product deleted Successfully",{
            position:"bottom-left"
        })
        refetch();
    }

    //handles addtocart action
    function handleAddToCart(product){
        dispatch(addCart(product));
        
    }

    //handles remove cart action
    function handleRemoveFromCart(product){
        dispatch(removeCart(product));

    }

    function handleSubmit(event){
        event.preventDefault();
    }
// search bar
    function filterData(){
        let filtered = [];
         if (data) {  
            filtered = [...data];
        if ( searchTerm) {
            filtered = filtered.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        if (sortOrder === "Low To High") {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortOrder === "High to Low") {
            filtered.sort((a, b) => b.price - a.price);
        }
    }
        
    return filtered;
    console.log(data.products);

    };

     
     

   // Update filteredData when searchTerm changes
    useEffect(()=>{
        setFilteredData(filterData());
    },[searchTerm,sortOrder,data])

    //for sorting
    function handleSortOptionClick(sortoption){
        setSortOrder(sortoption);
        setOpen(false);
    }
     
     

     
    return(
        <>
        <div className="ecommerce_container"> 
            <div className="ecommerce_subcontainer  "> 
            <div className="filter_container d-flex text-dark"> 
            <form className="formcontainer"  onSubmit={handleSubmit} >
            <input className="search_input" onChange={(e)=>setSearchTerm(e.target.value)}   type="text"  placeholder="Search YourFav Clothes..."/>
            <button className="formbtn btn btn-danger w-50">Submit</button>
             </form>
             <div className="  text_filter">

             <div className="dropdown"  
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}>

                    <button className="button1"> <span className="dropdown_heading">Sorting</span> 
                     {open?  <img className="imagedp"   src="https://cdn-icons-png.flaticon.com/128/2961/2961937.png"/>:<img className="imagedp2" src="https://cdn-icons-png.flaticon.com/128/11419/11419206.png"/>}  
                    </button> 

                {open &&<ul className="dplist">
                    {items.map((item)=><li className="dpitem" onClick={()=>handleSortOptionClick(item)}>{item}</li>)} 
                </ul>}
                
            </div>
                         
                         
            </div>
             </div>
               {isLoading && <h1 className="text-white text-center">Loading....</h1>}
                <div className="container"> 
                {(searchTerm && filteredData.length === 0 && !isLoading) && (
                            <h3 className="text-dark text-center">
                                No items found
                            </h3>
                        )}
                
                    {filteredData && filteredData.map((item)=>(
                        <>
                         <div className="shirt-card"  >
                            <div class="user-identification">
                                <div class="dots-container">
                                    <div class="dot"></div><div class="dot"></div><div class="dot"></div>
                                </div>
                                    <div class="actions">
                                     <div className="edit" onClick={()=>navigate('/updateproducts',{state:item})}>&#9998;</div>
                                        <div class="delete" onClick={()=>{handleDelete(item.id)}}>&#128465;</div> 
                                    </div>
                             </div>

                     <img src={item.image_url}  onClick={()=>navigate('/productdetails',{state:item})} alt={item.name} style={{cursor:"pointer"}} />
             
               
                        <div className="card-content">
                            <h3 className="productname">{item.name}</h3>
                            <p>Brand:{item.brand}</p>
                            <p>Material:{item.material}</p>
                            <div className="addremove">
                                <span className="price">Price:{item.price}</span>
                                <button className="addcart btn btn-primary"  onClick={()=>{handleAddToCart(item)}}>Add Cart</button>
                                <button className="removecart btn btn-danger text-white" onClick={()=>{handleRemoveFromCart(item)}} >Remove Cart</button>
                            </div>
                        </div>
                      </div>

                        </>
               ))}

    
        
                </div>
            </div> 
        </div>
        </>
    )
}
export default Ecommerce;