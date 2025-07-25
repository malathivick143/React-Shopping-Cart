import React from 'react';

import './Footer.css';

 function Footer() {
  return (
    <footer>
      <div className='maindivFooter'>
      <hr></hr>
      <p id="abtshotpPara">About the Shop</p>
        <p id="footerPara">
      
          Exquisite designs meet unparalleled craftsmanship. Discover regal Nawabi-inspired ensembles with contemporary twists, 
          meticulously crafted and personalized for any occasion. Step inside and let us transform your fashion aspirations into reality.
        </p>
        <p id="cprigthtPara">&copy; {new Date().getFullYear()} My Website</p>
      </div>
    </footer>
  );
 }
 
 export default Footer;