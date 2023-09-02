import React from "react";
import { styled } from "styled-components";
const Contactanos = () => {
  return (
    <Div className="contact mb-3">
      <figure className="contactanos">
        <span> Llámanos </span>
        <span> 912365478 </span>
        <a className="" href="#">
          CONTÁCTANOS
        </a>
      </figure>
    </Div>
  );
};

export default Contactanos;

const Div = styled.div`
  right: 0;
  width: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 883px){
    width: 100%;
    margin-top: 25px;
  }
  .contactanos {
    margin-right: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 25px;
    border-radius: 10px;
    background: #3B82F6;
    span {
      font-size: 35px;
      color: white;
      font-weight: bolder;
    }
    a {
      margin-top: 15px;
      padding: 10px;
      border-radius: 15px;
      color: white;
      font-weight: bolder;
      background-color: #0a0a0a;
      &:hover {
        color: red;
      }
    }
  }
`;
