import styled from "styled-components";

export const MapButtonContainer = styled.div`
  position: absolute;
  width: 80px;
  height: 100%;
  border: 1px solid blue;
  z-index: 1000;
  right: 3%;
  background-color: blue;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* justify-content: flex-end; */
`;

export const FloatButton = styled.button`
  /* position: absolute; */
  width: 46px;
  height: 46px;
  border-radius: 5px;
`;
