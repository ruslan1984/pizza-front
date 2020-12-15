import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const PizzaListBlock = styled.div`
  display: flex;
  justify-content: center;
`;

export const PizzaListImg = styled.img`
  width: 200px;
`;
export const PizzaListItem = styled.div`
  margin: 5px;
`;

export const PizzaName = styled.div`
  padding: 10px;
  background: #eee;
  font-size: 20px;
  text-align: center;
`;

export const PizzaPrice = styled.div`
  text-align: center;
  font-size: 30px;
  color: #e7755a;
`;

export const PizzaListLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
export const CurrencyItem = styled.div`
  cursor: pointer;
  padding: 5px;
  &:hover {
    background: #eee;
  }
  ${(props: { active?: boolean }) => {
    if (props.active) {
      return " background: #eeeeee !important; color: red !important;";
    }
  }};
`;
export const CurrencyBlock = styled.div`
  display: flex;
`;

export const BtnBlock = styled.div`
  display: flex;
`;
