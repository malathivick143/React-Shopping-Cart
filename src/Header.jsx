import {React,useContext} from 'react';
 import { Link } from 'react-router-dom';
// import logo from './Images/Artboard_2QBLK_Logo_350x - Copy.avif'
import logo from './Images/Artboard_6_350x.avif';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import './Header.css';
// import bgrdImg2 from './Images/bgrdImg2-modi1.jpg'
import {useState} from 'react'
import { CartContext } from './CartContext';
import { SearchContext } from './SearchContext';

 function Header() {
    const [isToggled, setIsToggled] = useState(false);
     const [searchValue, setSearchValue] = useState('');
      const { getCartQuantity } = useContext(CartContext);
      const { setSearchTerm} = useContext(SearchContext);
      

  const [isSearchVisible, setSearchVisibility] = useState(false);

  const handleSearchClick = () => {
    setSearchVisibility(!isSearchVisible);
    // setSearchItem('');
  };
 
  

  const handleInputChange = (event) => { 
    const newValue=(event.target.value);
    setSearchValue(event.target.value);
    setSearchTerm (event.target.value);
    //  setSearchTerm ("blue");
    
    //setSearchItem(searchItem);
    console.log(newValue);
   

  }
    const handleSearchClose = () => {
         console.log(isToggled);
   setIsToggled(!isToggled);
   console.log(setSearchTerm);
 
   
        };
        
    //     const divStyle=()=>
    //     {
    //         background:( !isToggled ?'hi' : 'grey')
            
    //     };
    

      
  return (
      <>
          <div className='headerDiv-white'>
              {/* {isToggled} */}
              {/* <input className="btntogglebgrdImg"  type="checkbox" id="cb1" /> */}
              <div className='headerDiv' id="headerdivForImg" >
                  {/* {isToggled ? 'Active' : 'Inactive'} */}



                  <div className='menutittleDiv'>
                      <div id="menuTittleDiv">

                          <div id="leftHeaddiv"></div>
                          <div id="centerHeaddiv">

                              <img src={logo} alt="Logo" className='headerLogo' />
                          </div>

                          <div id="rightHeaddiv">


                            
                                  {/* <Link to="/Login" className="Header__Icon Icon-Wrapper Icon-Wrapper--clickable hidden-phone">
                                      <svg className="Icon Icon--account " role="presentation" viewBox="0 0 20 20">
                                          <g transform="translate(1 1)" stroke="currentColor" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="square">
                                              <path d="M0 18c0-4.5188182 3.663-8.18181818 8.18181818-8.18181818h1.63636364C14.337 9.81818182 18 13.4811818 18 18"></path>
                                              <circle cx="9" cy="4.90909091" r="4.90909091"></circle>
                                          </g>
                                      </svg></Link> */}
                            
                             
                                  <Link href="/search"  onClick={handleSearchClick}  className="Header__Icon Icon-Wrapper Icon-Wrapper--clickable " data-action="toggle-search" aria-label="Search">
                                     <svg className="Icon Icon--search " role="presentation"viewBox="0 0 18 17">
                                          <g transform="translate(1 1)" stroke="currentColor" fill="none" strokeWidth="2" fillRule="evenodd" strokeLinecap="square">
                                              <path d="M16 16l-5.0752-5.0752"></path>
                                              <circle cx="6.4" cy="6.4" r="6.4"></circle>
                                          </g>
                                        
                                      </svg>
                                     {/* {isSearchVisible ? 'Close Search' : 'Open Search'} */}
                                     
                              </Link>
                              {isSearchVisible  && (
                                <div className='searchDiv'>
        <input type="text" className='txtSearchInput'  value={searchValue}
        onChange={handleInputChange}  placeholder="Search eg:blue" />
         <button onClick={() => setSearchVisibility(false)} className='btnSearchClose'>X</button>
  
       </div>
      )}
      
                            
                                  <Link to="/ShoppingCart" className="Header__Icon Icon-Wrapper Icon-Wrapper--clickable" data-action="open-drawer" data-drawer-id="sidebar-cart"
                                      aria-expanded="false" aria-label="Open cart">
                                   
                                        <svg className="Icon Icon--cart " role="presentation" viewBox="0 0 22 24">
                                          <g transform="translate(1 1)" stroke="currentColor" fill="none" strokeWidth="1.5" >
                                              <path d="M0 20V4.995l1 .006v.015l4-.002V4c0-2.484 1.274-4 3.5-4C10.518 0 12 1.48 12 4v1.012l5-.003v.985H1V19h15V6.005h1V20H0zM11 
                                    4.49C11 2.267 10.507 1 8.5 1 6.5 1 6 2.27 6 4.49V5l5-.002V4.49z" ></path>

                                          </g>
                                      </svg>
                                      
                                 <div className='cart'>
                                   <span className="badge">{getCartQuantity()>0?getCartQuantity():null}</span>
                                  </div>
                                 
                              </Link>
                              


                          </div>
                      </div>


                      <div id="mainMenuDiv">
                          <nav className="navbar">
                              <div className="navbar-container">

                                  <ul className="nav-menu">
                                      <li className="nav-item">
                                          <Link to="/" className="nav-links">
                                              Home
                                          </Link>
                                      </li>
                                      <li className="nav-item">
                                          <Link to="/Shop" className="nav-links">
                                              Shop
                                          </Link>
                                      </li>
                                      <li className="nav-item">
                                          <Link to="/Collection" className="nav-links">
                                              Collection
                                          </Link>
                                      </li>
                                      <li className="nav-item">
                                          <Link to="/Contact" className="nav-links">
                                              Contact US
                                          </Link>
                                      </li>
                                      <li className="nav-item">
                                          <Link to="/About" className="nav-links">
                                              About US
                                          </Link>
                                      </li>
                                      <li className="nav-item">
                                          <Link to="/Trackorder" className="nav-links">
                                              Trackorder
                                          </Link>
                                      </li>
                                  </ul>
                              </div>
                          </nav>
                          <br></br>
                          <br></br>
                          {/* <hr></hr> */}
                      </div>
                  </div>
                  
              </div>
          

              {/* <button className="btntogglebgrdImg" onClick={handleClick}>
                {btn ? "clicked" : "onClick"}
                </button> */}
              {/* <input className="btntogglebgrdImg"  type = "checkbox"  /> */}
              {/* <label  className="btntogglebgrdImg"  for="cb2">[cb2]</label> */}
              

              {/* <input       type="checkbox"    className="btntogglebgrdImg" id = "backgroundToggle"  title="Enter your name"      placeholder="Your name"    /> */}
              {/* <input type = "checkbox" className="btntogglebgrdImg" id = "backgroundToggle" /> */}
              {/* <label className="btntogglebgrdImg" for = "backgroundToggle">Switch Background</label> */}
              {/* <label className="btntogglebgrdImg" >^</label> */}
              {/* <p>{isToggled}</p> */}
              

          </div>


        
        
        
    </>
  );
 }
 

 export default Header;