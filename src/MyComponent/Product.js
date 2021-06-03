import React from "react";
import {Img} from '../MyStyleComponent/images'
import{Button} from '../MyStyleComponent/Button'
import './Products.css'

const Product = (props) => {
  //const { id, Ename, price, image } = props;
  
  const lists = props.myValue.map(( {id, Ename, price, image  })=>{
      return (
    <div key={id} className='block'>
        <Img src={image} alt='NA'></Img>
         <div className='blockText'>      
        <span className='productName'> {Ename} </span>
        <span className='productPrice'> price: {price}</span>
        </div> 
        <div className='buttons'>
        <Button bck='red' onClick={()=> props.count()}>Add to Cart </Button>
     
        {/*<button onClick={() => props.removeItems(id)}> remove me </button>*/}
        <Button bck='grey' onClick={() => props.findItem(id)}>Find </Button>
        </div>
        <Button btnWidth = '100%' bck='green' onClick={() => props.price(id, price)}>
                  Increase Price
                </Button>

      
    </div>

      )

  });
  return (

    <div className='container'>
        {lists}

    </div>

  );
};

export default Product;