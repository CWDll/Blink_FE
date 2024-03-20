import styled from "styled-components";

export const FloatContainer = styled.div`
  position: absolute;
  width: 80px;
  height: 100%;
  z-index: 1000;
  right: 3%;
  padding: 1em;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const FloatButtonContainer = styled.div`
  height: 250px;
  background-color: blue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FloatButton = styled.button`
  width: 46px;
  height: 46px;
  border-radius: 5px;
`;

export const AddPostButton = styled.button`
  position: absolute;
  background-color: #007aff;
  color: #ffffff;
  width: 354px;
  height: 75px;
  font-size: 24px;
  border: 0;
  border-radius: 20px;
  bottom: 10%;
  right: 30%;
`;
