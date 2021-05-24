import { Link } from 'react-router-dom'  ;
import React, { useState } from 'react';
import './main.css';
import {Card} from 'react-bootstrap';
import 'firebase/storage';
import firebase from 'firebase';
// import { Card, CardContent, Typography, Grid, CardActionArea, CardMedia, CardActions} from "@material-ui/core";



function Main({ productData , Cart , setCart }){

    const[ Products] =  useState(productData);


    const addToCart = (product) => {
      const exist = Cart.find( (x) => x.id === product.id);
      if(exist){
        setCart(Cart.map((y) => y.id === product.id ?
        { ...exist, quantity: exist.quantity + 1}
        :y
        ))
        // firebase.database.ref('Products').update({product});

      }else{
        setCart([...Cart, product]);
        // firebase.database.ref('Products').set({product});
      }
    };
    
 return(
  <div className = "grid-container-orig">
  <div className="flex-container">
      <h1 className="head">THE SY STORE</h1>
       <Link className="lnk-1" to="/ShowCart">Show Cart {Cart && Cart.length}</Link>
     
      </div>
      <div className="grid-container">
        <div className="grid-first">
          <h4>Sort</h4>
          <button>Sort</button>
        </div>
        <div className="grid-second">
        {Products && Products.map((product)=>{
          return(
            <div className="prod" >
              <div className="chunk">
               <Card className="card">
                   <Card.Img className="card-image" variant="top" src={product.url} alt={product.name}/>
                   <Card.Body>
                       <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                        {product.price}
                           </Card.Text>
                           <button className="btn-prod" 
                           onClick ={() => addToCart(product)}>Add To Cart</button>
                            </Card.Body>
                             </Card>
                             </div>
                              </div>
                              )})}
             </div>
             
           </div>
      
      </div>);

 }

 export default Main;

 
 

//  <div>
//              <img src ={product.url} alt={product.name} key={product.key}/>
//              <div>Product Name:{product.name}</div>
//              <div>Price:{product.price}</div>
             
//              </div>

// <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src="holder.js/100px180" />
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//     <Button variant="primary">Go somewhere</Button>
//   </Card.Body>
// </Card>