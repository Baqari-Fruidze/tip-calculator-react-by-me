import styled from "styled-components";
export const Label = styled.label`
  color: #5e7a7d;
  font-family: "Space Mono";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: ${(props) => (props.type === "select" ? "1.6rem" : "0.6rem")};
  display: block;
`;
