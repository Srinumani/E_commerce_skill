import { useLocation, useNavigate } from "react-router";



function CardDetails(){

    const {state}=useLocation();
    console.log("data",state);
    const navigate=useNavigate();

    function handlenavigate(){
        navigate('/ecommerce');
    }
     
    return(
        <>
        <h1 className="carddetail_heading">Card Details</h1>
        <div className="carddetail_container">
        <div className="carddetailmain_cart">
                    <div  className="detailimage_conatiner">
                        <img src="https://cdn-icons-png.flaticon.com/128/2099/2099238.png"  onClick={()=>{handlenavigate()}}  className="back_image" style={{width:"30px",height:"30px",cursor:"pointer"}}/>
                        <img src={state.image_url}/>
                        <div className="detailcontent_container">
                            <h1>{state.name}</h1>
                            <p>Brand: {state.brand}</p>
                            <p>Price: {state.price}</p>
                            <p className="discription">{state.discription}</p>
                        </div>
                    </div>
                     
                     
                    <div className="detailrating_container">
                       <img src="https://cdn-icons-png.flaticon.com/128/3163/3163742.png"/>
                      <button className="btn btn-danger button">Buy Now</button>
                     </div>        
                </div>
            
        </div>
        </>
    )
}
export default CardDetails;