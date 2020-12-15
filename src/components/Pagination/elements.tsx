import styled from "@emotion/styled";

export const PaginationList = styled.div`
  display: flex;
  justify-content: center;
`;

export const PaginationItem = styled.div`
  padding: 5px 10px;
  background: #eee;
  font-size: 20px;
  margin: 3px;
  cursor: pointer;
  &:hover {
    background: #ccc;
  }
  ${(props: { active?: boolean }) => {
    if (props.active) {
      return "background: #ccc !important";
    }
  }};
`;
