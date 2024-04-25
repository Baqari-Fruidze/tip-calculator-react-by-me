import dollar from "/images/icon-dollar.svg";
import person from "/images/icon-person.svg";
import React from "react";
import styled from "styled-components";

export const TwoInputs = styled.input`
  &::placeholder {
    color: #00474b;
  }
  border-radius: 5px;
  text-align: right;
  font-family: inherit;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;
  padding: 1rem 1.7rem;
  background-position: left 1.9rem bottom 1.4rem;
  border: none;
  background-color: #f3f9fa;
`;
