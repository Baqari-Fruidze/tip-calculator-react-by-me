import React from "react";
import dollar from "/images/icon-dollar.svg";
import person from "/images/icon-person.svg";
import styled from "styled-components";
import { Label } from "../Styles/Label";

export default function Input() {
  return (
    <Biggie>
      <LabelsDiv>
        <Label>Bill</Label>
        <input type="number" />
      </LabelsDiv>
      <div>
        <Label>Select Tip %</Label>
        <div>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>
      <LabelsDiv>
        <Label>Number of People</Label>
        <input type="number" />
      </LabelsDiv>
    </Biggie>
  );
}

const Biggie = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 3.2rem;
`;
const LabelsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;
