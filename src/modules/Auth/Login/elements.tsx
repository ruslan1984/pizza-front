import styled from "@emotion/styled";

export const RegisterBlock = styled.div`
    margin 10px 0;
    text-align:center;
`;

export const LogOutBtn = styled.button`
  margin: 10px auto;
  padding: 20px;
  background: #eee;
  display: block;
  text-align: center;
  font-size: 30px;
  border-radius: 5px;
  transition: 0.5s;
  border: none;
  cursor: pointer;
  &:hover {
    background: #ccc;
  }
  &:focus {
    outline: none;
  }
`;
