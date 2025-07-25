// App.js
import { React }from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Collection  from './Collection';
import Contact  from './Contact';
import ProductList  from './ProductList';
import Registration from './Registration';
import Login from './Login';
import NotFound from './NotFound';
import CollectionList from './CollectionList';
import ShoppingCart from './ShoppingCart';
import { CartProvider}  from './CartContext';
import { SearchProvider } from './SearchContext';




function App() {
 
  
 return (
  <div className="page-container">
     
     <CartProvider >
      <SearchProvider>   <Router>
  
     <Header />
     <Routes>
  
       <Route path="/" element={<Home />} />
       <Route path="/Shop" element={<Shop/>} />
       <Route path="/Collection" element={<Collection/>} />
       <Route path="/About" element={<About/>} />
       <Route path="/Contact" element={<Contact/>} />       
       <Route path="/ProductList/:Productid" element={<ProductList/>} />  
       <Route path="/CollectionList/:Collectionid" element={<CollectionList/>} />  
       <Route path="/ProductList" element={<ProductList/>} />  
       <Route path="/Login" element={<Login/>} /> 
       <Route path="/Registration" element={<Registration/>}/>   
       <Route path="/ShoppingCart" element={<ShoppingCart/>}  /> 
       <Route path="*" element={<NotFound/>} />
       
     </Routes>
     <Footer />
    
   </Router>
   </SearchProvider>

   </CartProvider>
   
   </div>
  
  
 );
}

export default App;