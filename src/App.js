
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'  ;
 import ShowCart from './ShowCart.jsx';
 import Signup from './Signup.js'
 import Main from './main.js';
// import { NotesContext } from "./context/context";


import './App.css';
const products = [
  {
    name:"S1",
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR36tB8-JRtR18TrRQL6XbHbyiq3F765is2_s2bfXDZR2zkS0mHpOBEEEQljL9UD1EHLx4W1h8&usqp=CAc",
    id:"s1",
    price:"20$",
    key:1,
    quantity:1
  },
  {
    name:"S2",
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkoQAXeU62GB8mIxe2-cJ6GdyCH3mgf_E7buDbb2Uixqgpu_lNbk3L8cJ4&usqp=CAc",
    id:"s2",
    price:"10$",
    quantity:1,
    key:2

  },
  {
    name:"S3",
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjWZnXVui-R5ABkL-y1pDniqbynweqtacjiCTzDxficch3jfgpcK_5tuFz3T-Ujl7kQ6yK-OI&usqp=CAc",
    id:"s3",
    price:"86$",
    quantity:1,
    key:3

  },
  {
    name:"S4",
    url:"data:image/jpeg;base64,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",
    id:"s4",
    price:"06$",
    quantity:1,
    key:4

  },
  {
    name:"S5",
    url:"data:image/jpeg;base64,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",
    id:"s5",
    price:"41$",
    quantity:1,
    key:5

  },
  {
    name:"S6",
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHEfg8n0KLsL4wfue1mPYMurDIGBzXGfyzrw&usqp=CAU",
    id:"s6",
    price:"544$",
    quantity:1,
    key:6

  }

];



function App() {
  const [Cart, setCart] = useState([]);

  
   return (
     
      
          <div>
          <div>
              <Router>
              <div>
                <switch>
                  <Route path ="/" component = {Signup} exact ={true} />
                <Route path = "/main"  exact={true}>
                 <Main Cart = {Cart} productData = {products} setCart = {setCart} /> 
                </Route> 
                <Route path = "/ShowCart">
                 <ShowCart Cart = {Cart} setCart = {setCart} /> </Route>
                
                </switch>
              </div>
              </Router> 
              </div>
              
            </div> 
      
     
     
  );
}

export default App;

