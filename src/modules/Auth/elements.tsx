import styled from "@emotion/styled";
import { Input, Btn } from "@components/elements";
import { Loading } from "@components/types";

export const InputAuth = styled(Input)`
  width: 100%;
  box-sizing: border-box;
`;

export const BtnAuth = styled(Btn)`
  width: 100%;
  font-size: 17px;
  margin: 0;
  ${(props: { loading?: Loading }) => {
    if (props.loading === Loading.start) {
      return "background: #eee !important";
    }
  }};
`;
export const TitleAuth = styled.div`
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
