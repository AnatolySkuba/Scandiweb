import styled from "styled-components";

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  cursor: pointer;
  object-fit: contain;
`;
