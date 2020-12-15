import styled from "@emotion/styled";
import {
  btnBackground,
  btnBackgroundHover,
  basketIcon,
} from "@components/variables";

const bay = `
    &:after{
        content:"";
        width: 40px;
        height: 40px;
        right:10px;
        background-image: url(${basketIcon});
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        animation: bay 2s;
    }
    @keyframes bay{
        to {
            transform: translate(100px,-100px) rotate(-360deg);
            opacity:0;
        }
    }
`;

export const BtnBlock = styled.div`
  display: flex;
  position: relative;
  ${(props: { active?: boolean }) => {
    if (props.active) {
      return bay;
    }
  }};
`;

export const CounterBlock = styled.div`
  display: flex;
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
`;
