import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const PizzaListBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
`;

export const PizzaListImg = styled.img`
  max-width: 100%;
  margin-bottom: 10px;
`;
export const PizzaListItem = styled.div`
  padding: 5px;
  box-sizing: border-box;
  width: 25%;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
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
