import React, { useState } from "react";
import dollar from "/images/icon-dollar.svg";
import person from "/images/icon-person.svg";
import styled from "styled-components";
import { Label } from "../Styles/Label";
import { TwoInputs } from "../Styles/TwoInputs";
import { Buttons } from "../Styles/Buttons";

export default function Input({
  bill,
  setBill,
  percent,
  setPercent,
  people,
  setPeople,
}) {
  const arr = ["5%", "10%", "15%", "25%", "50%", "custom"];

  const moneyAmount = (event) => {
    setBill(parseInt(event.target.value));
  };
  const personAmount = (event) => {
    setPeople(parseInt(event.target.value));
  };
  const handleClick = (event) => {
    setPercent(parseInt(event.target.textContent));
  };
  return (
    <Biggie>
      <LabelsDiv>
        <Label>Bill</Label>
        <TwoInputs
          type="number"
          icon={dollar}
          value={bill}
          onChange={moneyAmount}
        />
      </LabelsDiv>
      <div>
        <Label type={"select"}>Select Tip %</Label>
        <BtnCon>
          {arr.map((item, index) => {
            if (item !== "custom") {
              return (
                <Buttons key={index} $type={"default"} onClick={handleClick}>
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
        <HidenSpanDiv>
          <Label>Number of People</Label>
          {people === 0 ? <HiddenSpan>Can’t be zero</HiddenSpan> : ""}
        </HidenSpanDiv>
        <TwoInputs
          type="number"
          icon={person}
          value={people}
          onChange={personAmount}
        />
      </LabelsDiv>
    </Biggie>
  );
}

const HidenSpanDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const HiddenSpan = styled.span`
  color: #e17457;
  text-align: right;
  font-family: "Space Mono";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Biggie = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  @media (min-width: 90rem) {
    gap: 4rem;
  }
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
  @media (min-width: 90rem) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;
