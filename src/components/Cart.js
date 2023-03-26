import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <CartContainer>
      <div className="cart-content">
        <h1 className="cart-title">SHOPPING CART</h1>
        <h3 className="cart-subtitle">Your cart is empty in the moment</h3>
        <Link to="/">
          <a class="btn btn--full ">Continue shopping</a>
        </Link>
      </div>
    </CartContainer>
  );
};
const CartContainer = styled.section`
  display: flex;
  justify-content: center;
  margin: 10rem 0 10rem 0;

  .cart-content {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  h1 {
    font-size: 1.5rem;
  }
  h3 {
    font-size: 1rem;
  }
  .cart-title {
  }
  .btn {
    display: inline-block;
    background-color: #f1f1f1;
    white-space: nowrap;
    font-size: 1rem;
    padding: 1rem 2rem;
    border-radius: 9px;
    font-weight: 600;
    border: none;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 3rem;
    }
    h3 {
      font-size: 2rem;
    }
    .btn {
      font-size: 2rem;
    }
  }
`;

export default Cart;
