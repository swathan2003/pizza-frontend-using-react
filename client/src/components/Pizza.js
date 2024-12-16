import React, { useState } from "react";
import { Modal } from "react-bootstrap";

export default function Pizza({ pizza }) {
  const [quantity, setquantity] = useState(1);
  const [varient, setvarient] = useState("small");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItem = {
      name: pizza.name,
      varient,
      quantity,
      price: pizza.prices[0][varient] * quantity,
    };
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Pizza added to cart!");
  };
  
  return (
    <div
      style={{ margin: "70px" }}
      className="shadow-lg p-3 mb-5 bg-white rounded"
    >
      <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img
          src={pizza.image}
          className="img-fluid"
          style={{ height: "200px", width: "200px" }}
        />
      </div>
      <div className="flex-container">
        <div className=" m-1 w-100">
          <p>Varients</p>
          <select
            className="form-control"
            value={varient}
            onChange={(e) => {
              setvarient(e.target.value);
            }}
          >
            {pizza.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>
        <div className=" m-1 w-100">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setquantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-1">
            Price:{pizza.prices[0][varient] * quantity ||0} RS/-
          </h1>
        </div>
        <div className="m-1 w-100">
        <button className="btn btn-primary" onClick={addToCart}>
  ADD TO CART
</button>

        </div>
      </div>
     <Modal show={show} onhide={handleClose}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
         <img src={pizza.image}className="img-fluid" style={{height:'400px'}}></img>
         <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            CLOSE
          </button>
        </Modal.Footer>
        </Modal>
     
    </div>
    
  );
}
