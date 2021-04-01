import React from 'react';
import { useContext } from 'react';
import { BrowserRouter as  Link } from 'react-router-dom'  ;
import { NotesContext } from "./context/context";
function ShowCart () {
    const { Cart } = useContext(NotesContext);
      return(
            
            <div>
            <Link to ="/">Back Dashboard</Link>
            {Cart.map((product) => {
                return(
                    <div>
                    <img src ={product.url} alt={product.name} key ={product.key}/>
                    <div>{product.name}</div>
                    <div>{product.price}</div>
                    </div>
                    );
                 
            })}
            </div>
            
    
);   
}
export default ShowCart;;