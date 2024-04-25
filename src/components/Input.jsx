import React from "react";
import dollar from "/images/icon-dollar.svg";
import person from "/images/icon-person.svg";
import styled from "styled-components";
import { Label } from "../Styles/Label";
import { TwoInputs } from "../Styles/TwoInputs";
import { Buttons } from "../Styles/Buttons";

export default function Input() {
  const arr = ["5%", "10%", "15%", "25%", "50%", "custom"];
  return (
    <Biggie>
      <LabelsDiv>
        <Label>Bill</Label>
        <TwoInputs type="text" placeholder="142.55" icon={dollar} />
      </LabelsDiv>
      <div>
        <Label type={"select"}>Select Tip %</Label>
        <BtnCon>
          {arr.map((item, index) => {
            if (item !== "custom") {
              return (
                <Buttons key={index} $type={"default"}>
                  {item}
                </Buttons>
              );
            } else {
              return <Buttons $type={"custom"}>{item}</Buttons>;
            }
          })}
        </BtnCon>
      </div>
      <LabelsDiv>
        <Label>Number of People</Label>
        <TwoInputs type="text" placeholder="5" icon={person} />
      </LabelsDiv>
    </Biggie>
  );
}

const Biggie = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
const LabelsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;
const BtnCon = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1.6rem;
`;
