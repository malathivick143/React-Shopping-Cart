import React from 'react';
import ProductList from './ProductList';

import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'

import { useParams } from 'react-router-dom';

function CollectionList() {
     const  {Collectionid}  = useParams();
    //  console.log(Collectionid)

    
  const [products, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
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
//   const coid=3;
//    const foundObject = products.map(item => item.cid ===coid) ;
//    console.log(foundObject.pid);

 // console.log(foundObject);

  return (
  
<div>
{products
      .filter(item => item.cid === parseInt(Collectionid))
      .map(foundObject => (
    <div key={foundObject.pid} className='card-container-coll'>
                
                <Link to={`/ProductList/${foundObject.pid}`}>
                 <img src={"/src/Images/" +foundObject.images[0]} alt="galImg2" 
                  onMouseOver={e => (e.currentTarget.src =("/src/Images/"+foundObject.images[1]))}
                  onMouseOut={e => (e.currentTarget.src =("/src/Images/"+foundObject.images[0]))} />
                </Link>
                 <br></br><br></br><br></br>
                 {foundObject.pname} <br></br> {"INR:"+ foundObject.pprice} 
              </div>
             
        
      ))}
  </div>
  );
}
  


export default CollectionList