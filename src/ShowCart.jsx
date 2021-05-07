import React, { useState } from 'react';
// import { useContext } from 'react';
import { Link } from 'react-router-dom'  ;
// import { NotesContext } from "./context/context";
 
function ShowCart ({ Cart, setCart }) {
//    const [num ,setnum] = useState(0); 
  console.log(Cart);
const handleRemove = (producttoremove) => {
    const filteredData = Cart.filter(
      (product) => product.id !== producttoremove
    );
    setCart(filteredData);
  };


//   const handleIncrement = (product) => { 
//       setnum( num + 1);
//   }
//   const handleDecrement = () => {
//     setnum(num - 1);g
// }
      return(
            
            <div>
            <Link to="/main">Back to Dashboard</Link>
             { Cart && 
             Cart.map((product) => {
                return(
                    <div>
                    <img src ={product.url} alt={product.name} key ={product.key}/>
                    <div>{product.name}</div>
                    <div>{product.price}</div> 
                    <div> <i>Item Quantity:</i>{product.quantity}</div>
                    <div>
                    <button>+</button>
                    <button>-</button>
                    </div>
                    <div>
                     <button onClick = {() => handleRemove(product.id)}>Remove</button>
                    </div>
                    </div>
                    );
                 
            })} 
            </div>
      );   
}
export default ShowCart;