import { useSelector } from "react-redux";

function Cartmodal(){
    //geting the data from store to components  using hook
    const cartItems=useSelector(state=>state.cart.cart);
    console.log("cartdata",cartItems);
    return(
        <>
         <h1 className="cart_heading text-center">Welcome To Cart</h1>
         <div className="cart_container">
        {cartItems.map((item)=>(
             <div className="sub_conatiner">
             <div className="main_cart">
                 <div  className="image_conatiner">
                     <img src={item.image_url} alt="name"/>
                     <div className="content_container">
                         <h4 style={{textAlign:"justify"}}>{item.name}</h4>
                         <p>Price: {item.price}</p>
                         <p>Brand: {item.brand}</p>
                          
                     </div>
                 </div>
                  
                  
                 <div className="rating_container">
                    <h4 className="rating_container_heading" > 
                    <span className="add">+</span ><b className="quantity">{item.cartTotalQuantity}</b><span className="remove">-</span>
                    </h4>
                   <button className="btn btn-danger button">Buy Now</button>
                   <p>Total: {item.price*item.cartTotalQuantity}</p>
                  </div>        
             </div>

             

         </div>

        ))}
            
         </div>
        </>
    )
}
export default Cartmodal;