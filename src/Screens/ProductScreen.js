import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';
function ProductScreen(props){
    console.log(props.match.params.id)
    const product=data.products.find(x=> x._id=== props.match.params.id);

    return <div>
        <div className="back-to-home">
            <Link to="/">Back to home</Link>
        </div>
        <div className="details">
         <div className="details-image">
             <img src={product.image}alt="product"></img>
         </div>
         <div className="details-info">
             <ul>
                 <li>
                    <i>VEHICLE NAME</i>:<b>{product.name}</b>

                 </li>
                  <li>
                     <i>PRICE</i>:<b>{product.price}</b>
                     
                 </li>
                

             </ul>
         </div>
         <div className="details-action">
             <ul>
                 <li>
                         description:{product.description}
                 </li>
                 <li>
                     <button> Contact</button>
                 </li>
             </ul>
         </div>


        </div>
    </div>
}
export default ProductScreen;