import styled from "styled-components";
export const Buttons = styled.button`
  color: ${(props) => (props.$type === "default" ? "#FFFFFF" : "#547878")};
  text-align: ${(props) => (props.$type === "default" ? "center" : "right")};
  font-family: inherit;
  font-size: 24px;
  line-height: normal;
  font-style: normal;
  font-weight: 700;
  padding: 1.1rem;
  background-color: ${(props) =>
    props.$type === "default" ? "#00474b" : "#F3F9FA"};
  border: none;
  border-radius: 5px;
  padding-right: ${(props) => (props.$type === "custom" ? "1.6rem" : null)};
  &:hover {
    background: #26c2ae;
    color: #00474b;
  }
`;
