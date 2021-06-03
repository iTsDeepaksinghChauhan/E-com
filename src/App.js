/* import Header from './components/Header';
 import Main from './components/Main';

import Basket from './components/Basket';
import data from "./data";
import { useEffect, useState } from "react";
import Map from "./Product";
*/


import React , {useState, useEffect} from 'react';
import Header from './MyComponent/Header';
import data from "./data";
import Product from './MyComponent.js/Product';



const App =()=>{
  const{products}=data;
  const [value, setValue] = useState(products);
  const[cartCounts,setCartCounts]=useState(0);

  const findItem = (id, findItem) => {
    let getPerson = value.find((data) => data.id === id);
    alert(getPerson.id + " " + getPerson.Ename);
  };

  const changeCartcount=()=>{
    setCartCounts((prev)=>{
      return prev+1
    })
  }
  

  const removeItems = (id, removeItems) => {
    let newPerson = value.filter((xx) => xx.id !== id); // filter all value and then returning the value if enter id is = id
    setValue(newPerson);
  };

   const price = (id, price) => {
    
    let newVal = [...value];
    for (let i = 0; i < newVal.length; i++) {
      newVal[i].price =
        newVal[i].id === id ? newVal[i].price + 10 : newVal[i].price;
    }
    console.log(newVal);
    setValue(newVal);
  };

  return(
  <div>
    <Header count={cartCounts} />
    <Product 
     myValue={value}
      removeItems={removeItems}
      findItem={findItem}
      price={price}
      count={changeCartcount}
      

                
    ></Product>

  </div>
  )
}

export default App