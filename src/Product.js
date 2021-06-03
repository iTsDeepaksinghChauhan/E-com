import React from "react";

const Product = (props) => {
  //const { id, Ename, price, image } = props;
  const { id, Ename, price, image } = props.myValue;
  return (
    <div key={id}>
      <h6 style={{ color: "black" }}> {Ename} </h6>
      <h3>{price}</h3>
      <img src={image} style={{ width: "100px" }} alt="not loaded"></img>
      <button
        style={{ width: "100px" }}
        onClick={() => {
          props.changeValue();
        }}
      >
        &times;
      </button>
      <button onClick={() => props.removeItems(id)}> remove me </button>
      <button onClick={() => props.findItem(id)}>Find </button>
      {props.children}
    </div>
  );
};

export default Product;