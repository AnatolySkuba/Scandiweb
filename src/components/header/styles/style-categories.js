import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  width: 234px;
  height: 56px;
  left: 101px;
  bottom: 0px;
  cursor: pointer;
  
`;

export const BttonCat = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  background: transparent;
  border: none !important;
  margin-top: 17px;
  
`;
export const Item = styled.div`
  padding: 4px 1vw 32px 1vw;
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 120%;
  color: ${(props) =>
    props.active  ? "green" : "black"};
  &:hover {
    color: #5ece7b;
    box-shadow: inset 0 -2px 0 0 #5ece7b;
  }

`;
