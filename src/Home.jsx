import React from 'react';
import './home.css';
import galImg1 from './Images/kHAWISH.webp';
import galImg2 from './Images/Anarkali.webp';
import galImg3 from './Images/HomePic2.jpg';
import galImg4 from './Images/HomePic.webp';
// import bgrdImg2 from './Images/bgrdImg2.webp';
 
 function Home() {
  return (
    <div className='maindivHome'>
       
      <div className='galleryImgDivHome'>
        <p>Experience the timeless beauty<br></br>
          Khwaaish<br></br>
          Discover the epitome of elegance and refinement with our exquisite collection, "Khwaaish."
          Fulfill your deepest fashion desires as we present a curated selection of garments crafted to perfection. 
          Each piece in our collection is a harmonious blend of luxurious fabrics, meticulous craftsmanship, and timeless style.</p>
        <img src={galImg1} alt="galImg1" className='galleryImg' loading="lazy" />
    
      </div>

      <div className='galleryImgDivHome'>
      <img src={galImg2} alt="galImg2" className='galleryImg' loading="lazy" />
        <p>Reviving Anarkali Style with Iconic Flair<br></br>
        Rehana Basheer is credited with bringing the Anarkali-style back in vogue, and her collections have a distinctive 
        identity that is recognized across the south Indian film industry. Her approach to design is welcoming, and she has 
        a true passion for her craft, which is evident in every piece she creates.</p>
       </div>

       <div className='galleryImgDivHome'>
      
        <p>Each design is carefully crafted by expert tailors under her watchful eye, with her incomparable signature touch and
           attention to detail. Rehana's designs are brought to life with her intimate knowledge of her clients, and she adds their 
           personal details to the creation, making each piece uniquely identified with each individual.
        </p>
        <img src={galImg3} alt="galImg3" className='galleryImg' loading="lazy" />
       </div>

       <div className='galleryImgDivHome'>
       <img src={galImg4} alt="galImg4" className='galleryImg' loading="lazy" />
        <p>Redefining Regal Nawabi Fashion with Contemporary Twists<br></br>
        With her contemporary twists to the regal Nawabi sartorial traditions, Rehana Basheer is unarguably one of the
         pioneers of the fashion design scene of Chennai, paving the way for many others to follow suit. Her designs are not just pieces
          of clothing, but rather, they are works of art that reflect her unique perspective and creativity.</p>
           
      </div>
      
    </div>
  );
 }
 
 export default Home;