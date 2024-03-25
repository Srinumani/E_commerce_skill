import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function Navbar(){

    const cartItems=useSelector(state=>state.cart.cart);
    return(
        <>
                <nav class="navbar navbar-expand  bg-dark fixed-top">
                <div class="container-fluid">
                <Link to="/" className="nav-link"><a class="navbar-brand nav-link heading" href="#"><b><span className="text-danger">Shop</span><span className="text-info">Cama</span></b></a></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <Link to="/" className="nav-link"> <a class="nav-link active nav_links links text-white" aria-current="page" href="#">Home</a> </Link>
                        </li>
                        <li class="nav-item">
                       <Link to="/ecommerce" className="nav-link"><a class="nav-link  nav_links links text-white" href="#">Ecommerce</a> </Link>
                        </li>
                        <li class="nav-item">
                       <Link to="/addproducts" className="nav-link"><a className="nav-link  nav_links links text-white" href="#">Add Products</a> </Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                    <li className="nav-item cart_image_icon">
                        <Link to="/cart "  className="links"><a className=" text-white nav_links links  "  href="#"><img src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png" className="icon_image" alt="icon"/><span className="icon_text">{cartItems.length!=0 && cartItems.length}</span> </a></Link>
                        </li>
                        <li className="nav-item  ">
                           <a className="text-white links" href="#">Logout</a> 
                        </li>
                         
                    </div>
                    </div>
                </div>
                </nav>
        </>
    )
}
export default Navbar;