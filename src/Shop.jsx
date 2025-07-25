import React,{useContext} from 'react';
import './Shop.css'
import  { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import { SearchContext } from './SearchContext';

 
 function Shop() {

  const [products, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { searchTerm } = useContext(SearchContext);
 

 const handleImageMouseEnter=()=>
{

}
const handleImageMouseLeave=()=>
  {
  
  }
  
  useEffect(() => {
    fetch('/src/Products.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(products => {
        setData(products);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    

    <div>
     {
     
     products
      .filter(item => ( item.pname.toLowerCase().includes(searchTerm.toLowerCase())))
      .map((product) => (
        
        <div key={product.pid} className='card-container-coll'>
            
            <Link className='prodLink' to={`/ProductList/${product.pid}`}>
             <img className="shopListImgs" src={"/src/Images/" +product.images[0]} alt="galImg2"  
               onMouseOver={e => (e.currentTarget.src =("/src/Images/"+product.images[1]))}
              onMouseOut={e => (e.currentTarget.src =("/src/Images/"+product.images[0]))}  />
             </Link>
             <br></br><br></br><br></br>
             {product.pname} <br></br> {product.pprice} 
                      
          </div>
         ))}
          <h2>Search Results for: {searchTerm}</h2>
  </div>
  );
}
      export default Shop;





//     <div>
//     <div className='card-containner'>
//    <img src={shop1} alt="galImg2" />
//    <h6>Anamika Blue</h6> 
//    <p>INR:5500</p>   
  
//     </div>

// <div className='card-containner'>
// <img src={shop2} alt="galImg2" />
// <h6>Anamika Blue</h6> 
// <p>INR:5500</p>    

//  </div>

// <div className='card-containner'>
// <img src={shop3} alt="galImg2"  />
// <h6>Anamika Blue</h6> 
// <p>INR:5500</p>    

//  </div>

// <div className='card-containner'>
// <img src={shop4} alt="galImg2"  />
// <h6>Anamika Blue</h6> 
// <p>INR:5500</p>    
 
//  </div>

//  <div className='card-containner'>
// <img src={shop5} alt="galImg2"  />
// <h6>Anamika Blue</h6> 
// <p>INR:5500</p>   
 
//  </div>


//  <div className='card-containner'>
// <img src={shop6} alt="galImg2" />
// <h6>Anamika Blue</h6> 
// <p>INR:5500</p>  
  
//  </div>


//  <div className='card-containner'>
// <img src={shop7} alt="galImg2"  />
// <h6>Anamika Blue</h6> 
// <p>INR:5500</p>
   
//  </div>


//  <div className='card-containner'>
// <img src={shop8} alt="galImg2"  />
// <h6>Anamika Blue</h6> 
// <p>INR:5500</p>  
   
//  </div>


//  <div className='card-containner'>
// <img src={shop9} alt="galImg2"  />
// <h6>Anamika Blue</h6> 
// <p>INR:5500</p>    

//  </div>

//  <div className='card-containner'>
// <img src={shop10} alt="galImg2" />
// <h6>Anamika Blue</h6> 
// <p>INR:5500</p>    

//  </div>
 

//  </div>
 