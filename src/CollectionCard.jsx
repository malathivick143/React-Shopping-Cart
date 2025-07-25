import React from 'react';
import './CollectionCard.css';
import './Collection.jsx';
import './Products.jsx'
import './Products.jsx';
import { useState } from "react";
import Products from './Products.jsx';
import ProductList from './ProductList.jsx';
import { useLocation, BrowserRouter as Router, Routes,
  Route,
  Outlet,
  Link } from 'react-router-dom';
  




function CollectionCard(props) {

  const pname=props.id;

  // return <ProductList id={props.id} name={props.src} />;
  return(

   
    <div key={props.id} className='card-container-coll'>
      <p>{props.id}</p>
      

      <Link to="CollectionCard/ProductList" state={pname}>
        <img src={props.src} alt={props.alt}  >
        </img></Link>

      <h6>{props.description}</h6>
      <p>{props.price}</p>
      <button >view product</button>  

 </div>
 
  );

}

export default CollectionCard

