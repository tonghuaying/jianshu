import styled from "styled-components";

export const LoginWrapper = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;
  z-index: 0;
`;
export const LoginBox = styled.div`
  width: 400px;
  height: 230px;
  margin: 80px auto;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  padding-top: 15px;
`;
export const Input = styled.input`
  display: block;
  width: 200px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  color: #777;
  margin: 15px auto;
`;

export const Button = styled.div`
  width: 200px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  background: #3194d0;
  border-radius: 5px;
  margin: 15px auto;
  text-align: center;
  cursor: pointer;
`;
