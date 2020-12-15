import styled from "@emotion/styled";
import { Input, Btn } from "@components/elements";

export const InputRegister = styled(Input)`
  width: 100%;
`;

export const BtnRegister = styled(Btn)`
  width: 100%;
  font-size: 17px;
  margin: 0;
`;
export const TitleRegister = styled.div`
  text-align: center;
  font-size: 40px;
  margin-bottom: 20px;
`;
export const ErrorBlock = styled.div`
  padding: 10px;
`;
export const ErrorItem = styled.div`
  color: red;
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
