import styled from "styled-components";
import { useState } from "react";

export default function Result({
  bill,
  setBill,
  percent,
  setPercent,
  people,
  setPeople,
}) {
  const reset = () => {
    setPercent("");
    setBill("");
    setPeople("");
  };
  const tipPerPerson = (bill * percent) / 100 / people;
  const totalBillPerPerson = bill / 2 + tipPerPerson;
  return (
    <ResultCon>
      <ResultsCont>
        <AmountCon>
          <MiniCon>
            <TipAmount>Tip Amount</TipAmount>
            <PersonSpan>/ person</PersonSpan>
          </MiniCon>
          <MoneySpan>{isNaN(tipPerPerson) ? "0" : tipPerPerson}</MoneySpan>
        </AmountCon>
        <AmountCon>
          <MiniCon>
            <TipAmount>Total</TipAmount>
            <PersonSpan>/ person</PersonSpan>
          </MiniCon>
          <MoneySpan>
            {isNaN(totalBillPerPerson) ? "0" : totalBillPerPerson}
          </MoneySpan>
        </AmountCon>
      </ResultsCont>

      <ResetButton onClick={reset}>RESET</ResetButton>
    </ResultCon>
  );
}
const ResetButton = styled.button`
  border-radius: 5px;
  background: #26c2ae;
  color: #00474b;
  text-align: center;
  font-family: inherit;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
  padding: 1rem 0;
  &:hover {
    cursor: pointer;
    border-radius: 5px;
    background: #9fe8df;
  }
  @media (min-width: 90rem) {
    border-radius: 5px;
    background: #0d686d;
    color: #00474b;
    text-align: center;
    font-family: "Space Mono";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: auto;
  }
`;
const ResultsCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 90rem) {
    gap: 5.3rem;
  }
`;
const TipAmount = styled.span`
  color: #fff;
  font-family: "Space Mono";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const PersonSpan = styled.span`
  color: #7f9d9f;
  font-family: "Space Mono";
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const MoneySpan = styled.span`
  color: #26c2ae;
  text-align: right;
  font-family: "Space Mono";
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.667px;
  @media (min-width: 90rem) {
    color: #26c2ae;
    text-align: right;
    font-family: "Space Mono";
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -1px;
  }
`;
const AmountCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MiniCon = styled.div`
  display: flex;
  flex-direction: column;
`;
const ResultCon = styled.div`
  border-radius: 15px;
  background: #00474b;
  padding: 3.7rem 2.2rem 2.4rem 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  @media (min-width: 90rem) {
    width: 45%;
    padding: 4rem;
  }
`;
