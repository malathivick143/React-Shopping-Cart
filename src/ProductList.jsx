import {React, useCallback }from 'react';
import './ProductList.css';
import { useState,useEffect,useRef,useContext } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { CartContext } from './CartContext';




// import {ImageZoom , Controlled as ControlledZoom } from 'react-medium-image-zoom';
// import "react-medium-image-zoom/dist/styles.css"
// import InnerImageZoom from 'react-inner-image-zoom';
// import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';


function ProductList() {
 
  // const location = useLocation();
 
  // console.log(location);

  const {Productid}  = useParams();
  const [products, setData] = useState(null);
  const [currentImage,setCurrentIamge]=useState(0);
  const [qtyChosen, setQuantity] = useState(1); // Initial selected Quantity
  const [sizeChosen, setSize] = useState(); // Initial selected Quantity
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   const [ myVariable, setMyVariable ] = useState(1);
 
     const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)
  // const [isZoomed, setISZoomed]=useState(false);

 /*size aria control starts here*/

  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [isszChartVisible, setIsszChartVisible] = useState(true);
  const [zoom, setZoom] = useState(false);
  const selectId = 'my-select';
  const listboxId = 'my-select-listbox';

  const sizeOptions = [
    { value: 'XS', label: 'XS' },
    { value: 'S', label: 'SMALL' },
    { value: 'L', label: 'LARGE' },
    { value: 'XL', label: 'XLARGE' },
    { value: 'XXL', label: 'XXLARGE' },
    { value: 'XXXL', label: 'XXXLARGE' }
  ];
  const divRef = useRef(null);



  
  
  const toggleListbox = () => {
    setIsOpen(!isOpen);
  };



  const handleOptionClick = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
    setSize(value)
  };
  /*size aria control ends here*/
  /*Opening Product Image in a new window starts here*/
  const openProdImgInNewWindow = (url) => {
    
    const divContent = divRef.current.innerHTML;
    if (divContent && divContent instanceof HTMLElement) {
      const elements = divContent.getElementsByClassName('prodImgDispdiv');
      
    } else {
      console.error('divContent is not an HTMLElement or is null/undefined');
    }
    

    const currentUrl = url;
    const newWindow = window.open('', '_blank');
    newWindow.document.close();

    
    // newWindow.document.body.innerHTML =divContent.getElementsByClassName('prodImgDispdiv').innerHTML;
    
  
    //  divRef.getElementsByClassName('prodImgDispdiv').innerHTML;
  
    
  
  };
   /*Opening Product Image in a new window Ends here*/

  /*Quantity input starts here*/

  const handleQtyChange = (event) => {
    const inputValue = parseInt(event.target.value, 10);
    if (!isNaN(inputValue)) {
      setNumber(inputValue);
  
      
    }
  };

  const updateCartCntxtQty=()=>
    {
    
      console.log(myVariable);
      console.log(foundObject.pid);
     
    };
  const qtyIncrement = () => {
    setQuantity(qtyChosen + 1);
    setMyVariable(qtyChosen + 1);
   
  };
  

  const qtyDecrement = () => {

    if (qtyChosen > 0) {
    setQuantity(qtyChosen - 1);
    setMyVariable(qtyChosen -1);
    
    }
  };
  /*Quantity input Ends here*/

  /*SizeChart visibility starts here*/
  
  const toggleSizeDivVisibility = () => {
    setIsszChartVisible(!isszChartVisible);
    // console.log(isszChartVisible)
    
  };
 /*SizeChart visibility Ends here*/

 /*Zoom code starts here*/
  const handleZoomChange= useCallback(shouldZoom=>{
   setISZoomed(shouldZoom)

 },[])

const handleOpenNewTab = () => {
  const newTab = window.open('', '_blank');
  if (newTab) {
    if (newTab) {

      newTab.document.body.innerHTML = document.getElementsByClassName('prodImgDispdiv').innerHTML;
    }
   
    newTab.document.title = 'Content from Div';
   
  }
};

  
 useEffect(() => {
    fetch(`/src/Products.json`)
    
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response}`);
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

  const foundObject = products.find(item => item.pid === parseInt(Productid));
  // console.log(foundObject);
  return (

    <div className='ProdDisplaydiv'>
      <div  className='ProdDisplaydivLeft'>
        <div ref={divRef} className='ProdImgDiv'>
          <div className='prodImgTilesdiv'>
            <img src={"/src/Images/" + foundObject.images[0]} alt="galImg1" onClick={e => setCurrentIamge(0)} />
            <img src={"/src/Images/" + foundObject.images[1]} alt="galImg2" onClick={e => setCurrentIamge(1)} />
            <img src={"/src/Images/" + foundObject.images[2]} alt="galImg3" onClick={e => setCurrentIamge(2)} />
          </div>
          <div className='prodImgDispdiv'
        >
          {/* <img  onClick={()=>openProdImgInNewWindow(window.location.url)} src={"/src/Images/" + foundObject.images[currentImage]} alt="Thumbnail" /> */}
            <a href={"/src/Images/" + foundObject.images[currentImage]} target='_blank' 
    rel="noopener noreferrer"
   
  >
            <img   src={"/src/Images/" + foundObject.images[currentImage]} 
             alt="Zoom"
      style={{ width: '100%', maxWidth: '1500px' }}
        />
            </a>  
          
          </div>
        </div>
        
        <div className="prodSizeDiv">

          <div className="prodSizeDesc">
            <br></br>
            <label>Size Chart:</label> 
            
        
              <button id="prodSizeToggleBtn"type="button" style={{float:'right',display:'flex'}} onClick={toggleSizeDivVisibility}>
                {!isszChartVisible ?

                  <svg width="50" height="30" viewBox="0 0 50 50">
                    <path d="M 25,15 L 25,35" stroke="grey" />

                    <path d="M 15,25 L 35,25" stroke="grey" />

                  </svg> :

                  <svg width="50" height="30" viewBox="0 0 50 50">

                    <path d="M 15,25 L 35,25" stroke="grey" />

                  </svg>
                }


              </button>
           
           
            <hr></hr>
            <div className="toggledivSizeChart">
              {isszChartVisible && <div className="prodSizeDescInner">

                <img src={"/src/Images/Size_chart_top.webp"} alt="Thumbnail" />
                <img src={"/src/Images/Size_chart_bottom.webp"} alt="Thumbnail" />


              </div>}
            </div>
          </div>
        </div>
      </div>
      <div className='prodInfoDispdiv'>
        <h6>{foundObject.pname}</h6>
        <h6>{foundObject.pprice}</h6>
        <p id="prodDescPara">{foundObject.pdesc}</p>

        <div className="select-container">
          <label htmlFor={selectId}>Choose your size:</label>
          <div className="select-wrapper-out">
            <button
              id={selectId}
              aria-haspopup="listbox"
              aria-expanded={isOpen}
              aria-controls={listboxId}

              onClick={toggleListbox}
            >
              {selectedValue || 'Select your Size'}
              
            </button>

            {isOpen && (

              <ul
                className="select-wrapper-in"
                id={listboxId}
                role="listbox"
              >
                {sizeOptions.map((option) => (
                  <li
                    key={option.value}
                    role="option"
                    onClick={() => handleOptionClick(option.value)}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div><span >Quantity:</span>
            <div >
              <button type="button" onClick={qtyDecrement}   data-action="decrease-quantity">

                <svg width="40" height="30" viewBox="0 0 50 50">

                  <path d="M 15,25 L 35,25" strokeWidth="2" stroke="black" />

                </svg>
              </button>
              <input type="text" className="inputQtyChosen" min="0" step="1"  value={qtyChosen} onChange={handleQtyChange}  ></input>
              <button type="button" onClick={qtyIncrement} data-action="increase-quantity">

                <svg width="40" height="30" viewBox="0 0 40 40">

                  <path d="M 25,15 L 25,35"  strokeWidth="2" stroke="black"  />

                  <path d="M 15,25 L 35,25" strokeWidth="2" stroke="black"  />

                </svg>

              </button>
            </div>
          </div>
        </div>

        <div id="btnBuyGroup">
        
       <Link >
          <button onClick={() => {
              if (!sizeChosen) {
            alert('Please select a size before adding to cart.');
            return;
          }
                    addToCart(foundObject,qtyChosen,sizeChosen)}}>ADD TO CART</button>
                 
                   
          </Link>
          <Link to="/ShoppingCart">
          <button value={qtyChosen} onClick={()=>{updateCartCntxtQty()}}>VIEW CART</button>
          </Link>
        </div>
     

      </div>


    </div>


  

  );
}

export default ProductList
