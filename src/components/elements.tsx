import styled from "@emotion/styled";
import {
  btnBackground,
  btnBackgroundHover,
  loadingImage,
} from "@components/variables";
import { Loading } from "./types";
import { withRouter } from "react-router";

const load = `
    &:before{
      content:'Loading...';
      bacground: white;
      z-index: 1000;
      width:100%;
      height:100%;
      position: absolute;
      left:0;
      top:0;
      background-color: white;
    }
    &:after{
      content:'';
      position: absolute;
      background-image: url(${loadingImage});
      background-size: 150px;
      display: flex;
      z-index: 1001;
      top: 0;
      width: 100%;
      height: 100%;
      max-width: 100%;
      background-repeat: no-repeat;
      background-position: center center;
      animation: loading 3s infinite;
      left: 0;

}
@keyframes loading {
    to { transform: Rotate(-360deg); }
   }
`;

export const Page = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  ${(props: { loading?: Loading }) => {
    if (props.loading === Loading.start) {
      return load;
    }
  }};
`;

export const Btn = styled.button`
  flex: 1;
  border: none;
  background: ${btnBackground};
  margin: 2px;
  padding: 10px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  transition: 0.5s;

  &:focus {
    outline: none;
  }
  &:hover {
    background: ${btnBackgroundHover};
  }
`;
export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #eee;
  margin: 2px 0;
  width: 100%;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`;
export const Textarea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #eee;
  margin: 2px 0;
  width: 100%;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  max-width: 400px;
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;
