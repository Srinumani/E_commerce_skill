import { BrowserRouter,Routes,Route } from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Ecommerce from "./Pages/Ecommerce";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Addproducts from "./Pages/Addproduct";
import Updateproducts from "./Pages/Updateproduct";
import Cartmodal from "./Pages/Cartmodal";
import CardDetails from "./Pages/CardDetails";


function App() {
  return (
    <div className="App">
      <Provider store={store}> 
          <BrowserRouter>
          <ToastContainer/> 
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/ecommerce" element={<Ecommerce/>}/>
              <Route path="/addproducts" element={<Addproducts/>}/>
              <Route path="/updateproducts" element={<Updateproducts/>}/>
              <Route path="/cart" element={<Cartmodal/>}/>
              <Route path="/productdetails" element={<CardDetails/>}/>
            </Routes>
          </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
