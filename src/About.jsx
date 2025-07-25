import React from 'react';
import './about.css';
import galImg1 from './Images/Aboutus.webp'

 
 function About() {
  return (
   <div className='maindivHome'>
        
         <div className='galleryImgDiv'>
        
           <p>About our founder
            <br></br>
Rehana Basheer is a true 
visionary and a celebrity fashion designer who has made
 a significant impact on the fashion industry in India.
  Her passion for art and design began at a young age, and over the years, 
  she has built a highly coveted clothing label with a distinctive style and a strong clientele.
<br></br>
<br></br>
She is a dreamer and an achiever, who is a self-taught artist and has 
honed her skills over the years to become one of the most sought-after fashion designers in the south Indian
 film industry. Her name has become synonymous with fashion design, and her contributions to the industry have been nothing short of remarkable.</p>
           <img src={galImg1} alt="galImg1" className='galleryImg' />
       
         </div>
   
         
       </div>
  );
 }
 
 export default About;