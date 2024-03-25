import { Link } from "react-router-dom";
function Home(){
    return(
        <>
        <div className="home_container"> 
         <div class="banner-container">
            <img className="d-flex w-100" src="https://img.freepik.com/free-vector/night-tropical-island-ocean_107791-1137.jpg" alt="Banner Image"/>
            <div class="banner-content   d-none d-md-block">
             <b><h1 className="text-warning banner-heading">Welcome To ShopCama</h1></b>
              <b><h5 className="text-white banner-heading">Here you can find everything</h5></b>
              <p className="banner-paragraph">Millon's of products are available Exchange offer is the another best feature of ShopCama</p>
              <p className="banner-paragraph">10000 Members are already registered ,Now its your Time</p>
              <button className="btn btn-outline-light text-warning btn-dark">Shop Now</button>
            </div>
          </div>
            <div className="homesub_container  "> 
              <h1 className="text-center text-info">Your One-Stop Shop for All Things Shopping!</h1>
              <h1 className="text-center text-info">Shop with Confidence at ShopCama</h1>
              <p>ShopCama Ecommerce is your ultimate destination for a delightful and convenient online shopping experience. We offer a vast collection of products across various categories, ensuring you find everything you need under one roof.
              your ultimate destination for a delightful and convenient online shopping experience. We offer a vast collection of products across various categories, ensuring you find everything you need under one roof
              </p>
            <p>
            At ShopCama Ecommerce, we're passionate about providing you with a satisfying and enjoyable online shopping experience.
            We strive to offer an unparalleled selection of high-quality products at competitive prices, all delivered with exceptional customer service.
            </p>
             <ul className="home_list">
              <li><b>Extensive Product Range:</b> 

                <p>Explore a treasure trove of products, from trendy clothing and stylish accessories to essential homeware and electronics. We cater to a wide range of needs and preferences.
                Browse through our meticulously curated categories to find exactly what you're looking for. Whether you're revamping your wardrobe, decorating your home, or searching for the latest gadgets, we have it all.
                </p>

              </li>
              <li>
              <b>Superior Quality:</b> 
              <p>Browse through our meticulously curated categories to find exactly what you're looking for. Whether you're revamping your wardrobe, decorating your home, or searching for the latest gadgets, we have it all.Explore a treasure trove of products, from trendy clothing and stylish accessories to essential homeware and electronics.</p>

              </li>
              <li>
              <b>Diverse Categories:</b>
              <p>We prioritize quality at ShopCama Ecommerce. We partner with reliable vendors and brands to bring you products that are built to last and exceed your expectations.Enjoy a user-friendly platform that makes online shopping a breeze. Our website is easy to navigate, with efficient search filters and clear product descriptions to help you find what you need quickly.
              We prioritize quality at ShopCama Ecommerce. We partner with reliable vendors and brands to bring you products that are built to last and exceed your expectations.</p> 

              </li>
              <li>
              <b>Seamless Shopping Experience:</b> 
              <p>Enjoy a user-friendly platform that makes online shopping a breeze. Our website is easy to navigate, with efficient search filters and clear product descriptions to help you find what you need quickly.
              We prioritize quality at ShopCama Ecommerce. We partner with reliable vendors and brands to bring you products that are built to last and exceed your expectations.
              </p>

              </li>
             </ul>
            <Link className="nav-link" to="/ecommerce">
              <button className="d-flex m-auto btn  text-light btn-outline-info">Show More</button>
            </Link>
            </div>
          </div>

        </>
    )
}
export default Home;