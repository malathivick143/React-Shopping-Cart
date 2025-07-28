import React from 'react';
import './Shop';
import { v4 as uuidv4 } from 'uuid';

import {Link, BrowserRouter} from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Collection.css';
import './Products';
import './ProductList';
import './CollectionList';





// import colletion8 from './Images/image8-1.webp'
// import colletion9 from './Images/image9-1.webp'
// import colletion10 from './Images/image10-1.webp'
 
 function Collection() {

  const [collections, setData] = useState(null);
  
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    
 useEffect(() => {
    fetch(`/Collection.json`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response}`);
        }
        
        return response.json();
        
      })
      .then(collections => {
        setData(collections);
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


    
 
  // const foundObject = collections.map(item => item.cid === collections.cid);
  // console.log(foundObject);
  return (

    
      <div className='collImgDispdiv'>
        {
          collections.map((collection,index) => (
            <div>
          <div key={index}></div>
            <div className='collImgDispdiv'>
            {/* <img className="collTileImg" src={"/src/Images/" + collection.images[0]} alt="galImg1"  /> */}
          {/* </div> */}
              <div className='btnOnCollTileImage'   style={{backgroundSize: 'cover',width: 350, height: 450, backgroundImage: `url("${"/src/Images/" + collection.images[0]}")` }} >
                                                
                <h6 className='collNameHead'>{collection.cname}</h6>
                 <Link to={`/CollectionList/${collection.cid}`}>
             <button className='collViewBtn' >VIEW PRODUCTS</button>
             </Link>
          
             
              </div>
             
              </div>
              
         
          
</div>

          ))}
  
</div>

      );
}
 export default Collection;

 
// collections.map(item => item.cid === collections.cid);
//          {/* <div className='prodImgTilesdiv'>
//            <img src={"/src/Images/" + collections.images[0]} alt="galImg1"  />
//          </div> */}
//         <div className='prodImgDispdiv'>
//           <img src={"/src/Images/" + collections.images[0]} alt="Thumbnail" />
//         </div>
//         <div className='prodInfoDispdiv'>
//           <h6>{collections.cname}</h6>
//           <h6>{"INR: "+collections.pprice}</h6>
//           <p id="prodDescPara">{collections.pdesc}</p>
//           <button>Add to cart</button>
//         </div>
     
       
    
 


      
    /* <div>
     {products.map((product) => (
      
        <div key={product.pid=={pid}} className='card-container-coll'>
            <div className='prodImgTilesdiv'>
          <img src={"/src/Images/" + product.images[0]} alt="galImg1"  />
          <img src={"/src/Images/" + product.images[1]} alt="galImg2"  />
          <img src={"/src/Images/" + product.images[2]} alt="galImg3" />
        </div>
        <div className='prodImgDisdiv'>
          <img src={"/src/Images/" + product.images[0]} alt="Tuumbnail" />
        </div>
        <div className='prodImgTilesdiv'>
          <h6>{product.pname}</h6>
          <h6>{product.pprice}</h6>
          <p>{product.pdesc}</p>
        </div>
     
      <button>Add to cart</button>

         
          </div>
         ))} */
  /* </div> */
