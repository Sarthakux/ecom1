import { Link } from 'react-router-dom'  ;
import React, { useState } from 'react';
import './main.css';
import { Card, CardContent, Typography, Grid } from "@material-ui/core";



function Main({ productData , Cart , setCart }){

    const[ Products] =  useState(productData);


    const addToCart = (product) => {
      const exist = Cart.find( (x) => x.id === product.id);
      if(exist){
        setCart(Cart.map((y) => y.id === product.id ?
        { ...exist, quantity: exist.quantity + 1}
        :y
        ))

      }else{
        setCart([...Cart, product]);
      }
    };
    
 return(
  <div className = "App">
  <div className="heading">
      <h1>THE SY STORE</h1>
       <Link to="/ShowCart">Show Cart {Cart && Cart.length}</Link>
     
      </div>
      <div>
        {Products && Products.map((product)=>{
          return(
            
            <div>  
              <div>
             <img src ={product.url} alt={product.name} key={product.key}/>
             <div>{product.name}</div>
             <div>{product.price}</div>
             <button 
             onClick ={() => addToCart(product)}>Add To Cart</button>
             </div>
             </div>
             
             
             )})}
             
          

    
      </div>
      
      </div>);

 }

 export default Main;