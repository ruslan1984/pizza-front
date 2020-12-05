import styled from "@emotion/styled";

export const Input = styled.input`
  padding: 12px 20px;
  font-size: 16px;
  border: 1px solid grey;
  margin: 3px 0;
  &:focus {
    outline: none;
  }
`;

export const MainPage = styled.div`
  display: flex;
`;
export const Button = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  background: #68ef68;
  border: none;
  text-transform: uppercase;
  margin: 5px 0;
  &:hover {
    transition: 0.5s;
    background: #1be61b;
  }
`;
