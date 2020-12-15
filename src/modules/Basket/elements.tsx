import styled from "@emotion/styled";

export const Img = styled.img`
  width: 100px;
  margin-right: 10px;
`;
export const BasketItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;
`;
export const Name = styled.div`
  font-size: 30px;
`;

export const BasketImg = styled.div`
  display: flex;
  align-items: center;
  max-width: 500px;
`;

export const RemoveBtn = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTUuNTU2IDUxNS41NTYiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTE1LjU1NiA1MTUuNTU2IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im02NC40NDQgNDUxLjExMWMwIDM1LjUyNiAyOC45MDIgNjQuNDQ0IDY0LjQ0NCA2NC40NDRoMjU3Ljc3OGMzNS41NDIgMCA2NC40NDQtMjguOTE4IDY0LjQ0NC02NC40NDR2LTMyMi4yMjJoLTM4Ni42NjZ6Ii8+PHBhdGggZD0ibTMyMi4yMjIgMzIuMjIydi0zMi4yMjJoLTEyOC44ODl2MzIuMjIyaC0xNjEuMTExdjY0LjQ0NGg0NTEuMTExdi02NC40NDR6Ii8+PC9zdmc+);
`;
export const BasketPrice = styled.div`
  display: flex;
  align-items: center;
`;

export const Price = styled.div`
  margin-right: 20px;
`;

export const BasketTitle = styled.div`
  font-size: 52px;
  text-align: center;
  border-bottom: 1px solid #fcebc1;
  margin-bottom: 20px;
`;

export const EmptyBasket = styled.div`
  font-size: 52px;
  text-align: center;
`;

export const TotalPrice = styled.div`
  font-size: 27px;
  text-align: right;
`;
export const BasketProducts = styled.div`
  font-size: 27px;
  text-align: right;
  border-bottom: 1px solid #fcebc1;
  margin-bottom: 20px;
`;
export const ErrorItem = styled.div`
  color: red;
`;
export const ErrorBlock = styled.div`
  max-width: 400px;
`;
