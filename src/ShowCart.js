import React  from 'react';
import { Link } from 'react-router-dom';
import './cart.css';
import {Card} from 'react-bootstrap';
function ShowCart ({ Cart, setCart }) {
  console.log(Cart);
const handleRemove = (producttoremove) => {
    const filteredData = Cart.filter(
      (product) => product.id !== producttoremove
    );
    setCart(filteredData);
  };


  const addToCart = (product) => {
      setCart([...product,  { quantity : product.quantity +1 }])
      console.log(product, "ok");
  };


  const onRemove = (product) => {
    const exist = Cart.find((x) => x.id === product.id);
    if (exist.quantity === 1) {
      setCart(Cart.filter((x) => x.id !== product.id));
    } else {
      setCart(
        Cart.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };
      return(
            
            <div id ="grid-container">
              <div className="flex-container">
               <h1> Cart </h1> 
              <Link to="/main">Back to Dashboard</Link>
              </div>
            <div>
             { Cart && 
             Cart.map((product) => {
                return(
                    <div className="prod-box">
                    <div className="part">
                    <Card id="card">
                     <Card.Img className="card-image" variant="top" src={product.url} alt={product.name}/>
                     <Card.Body>
                       <Card.Title>{product.name}</Card.Title>
                       <Card.Text>
                        {product.price}
                       </Card.Text>
                    {/* <img src ={product.url} alt={product.name} key ={product.key}/>
                    <div>{product.name}</div>
                    <div>{product.price}</div>  */}
                    <div>
                    <button onCLick=  {() => addToCart(product)}>+</button>
                    {product.quantity}
                    <button onClick = {()=> onRemove(product)}>-</button>
                    </div>
                    <div>
                     <button onClick = {() => handleRemove(product.id)}>Remove</button>
                    </div>
                    </Card.Body>
                     </Card>
                     </div>
                    </div>
                    );
                 
            })} 
            </div>
            </div>
      );   
}
export default ShowCart;