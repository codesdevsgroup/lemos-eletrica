import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;

  .card-container {
    padding: 0.5rem;
    height: 7.5rem;
    width: 12.5rem;
    background-color: #B599FF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .card-container span {
    display: block;
    font-family: 'Poppins';
    font: 0.75rem;
    color: black;
  }

  .product-name {
    height: 75px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .product-price {
    margin-top: 0.625rem;
  }
  
`