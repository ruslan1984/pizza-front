import styled from "@emotion/styled";
import { btnBackground, btnBackgroundHover } from "@components/variables";
export const BtnBlock = styled.div`
  display: flex;
`;

export const CounterBlock = styled.div`
  display: flex;
  margin: 5px 0;
  min-width: 200px;
`;
export const CounterInput = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: textfield;
  margin-right: -17px;
  font-size: 18px;
  width: 50px;
  border: none;
  text-align: center;
  &:focus {
    outline: none;
  }
`;
export const CounterBtn = styled.div`
  cursor: pointer;
  padding: 10px;
  background: ${btnBackground};
  transition: 0.5s;
  border-radius: 16px;
  z-index: 2;
  &:hover {
    background: ${btnBackgroundHover};
  }
  ${(props: { disabled?: boolean }) => {
    if (props.disabled) {
      return " background: #eee !important;";
    }
  }};
`;

export const PriceTotal = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin: 10px;
  min-width: 90px;
  justify-content: flex-end;
`;
