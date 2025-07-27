import {React,useState ,useContext} from 'react';
import './ShoppingCart.css';
import {Link} from 'react-router-dom';
import { CartContext } from './CartContext';





function ShoppingCart() 
{
  const [qtyChosen, setQuantity] = useState(1); // Initial selected Quantity
  const { cartItems, addToCart, removeFromCart,removeFromCart1, clearCart, getCartTotal,getCartQuantity } = useContext(CartContext)


  const handleQtyChange = (event) => {
    const inputValue = parseInt(event.target.value, 10);
    if (!isNaN(inputValue)) {
      setNumber(inputValue);
    }
  };

const qtyIncrement = () => {
  setQuantity(qtyChosen + 1);
};

const qtyDecrement = () => {

  if (qtyChosen > 0) {
  setQuantity(qtyChosen - 1);
  }
};


  return (
  
    <div className="containner">
      <h1>View Cart</h1>
      <span>
    
        <h5>Product / Size </h5>
      
           <h5>Price</h5>
           <h5 >Quantity</h5>
           <h5>Total</h5>
           
           </span>
           <hr></hr>
      <div>
        {
          cartItems.map((item) => (
            <div key={`${item.pid}-${item.size}`}>
              <div className="CartProduct">
                <Link className='CartProductLink' to={`/ProductList/${item.pid}`}>
                  <img className='CartProductImg' src={"/src/Images/" + item.images[0]} alt={item.pname} />
                </Link>

                <p> {item.pname}  {' / '}  {item.size}</p>

                <p> {item.pprice}</p>
                <div className="incrDecrprodQuantity">
                <button onClick={() => {  removeFromCart1(item,item.size)}}> -</button>           
                <p>{item.quantity}</p>
                <button onClick={() => { addToCart(item,1,item.size) }}> +</button> 
               
                </div>
                <p>{'Rs.'+item.pprice * item.quantity}</p>       
               
               
                
                
                <h4  onClick={() => { removeFromCart(item,item.quantity,item.size) }}>Remove</h4>
                
              </div>
              <hr></hr>
            </div>
     
   ))}
 </div>
 {
   cartItems.length > 0 ? (
     <div className="cartDetails">
  <span>
      <h3>Quantiyt : {getCartQuantity()}</h3>
      <h3>Total : {getCartTotal()}</h3>
   </span>
   <button   onClick={() => {clearCart()}}>Clear cart</button>
 </div>
   ) : (
     <h1 >Your cart is empty</h1>  
   )
 }
  
</div>
  )}
export default ShoppingCart;



    

