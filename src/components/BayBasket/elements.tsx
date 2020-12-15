import styled from "@emotion/styled";
import { Btn } from "@components/elements";

export const BtnBay = styled(Btn)`
  width: 100%;
  font-size: 20px;
  ${(props: { active?: boolean }) => {
    if (!props.active) {
      return "display:none";
    }
  }};
`;

export const TotalPriceBlock = styled.div`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
`;

export const PriceItem = styled.div`
  font-size: 16px;
  color: #777;
`;
export const TotalPriceItem = styled.div`
  font-size: 22px;
  text-align: center;
  margin-top: 12px;
`;
