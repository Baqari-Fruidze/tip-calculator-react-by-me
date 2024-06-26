import Input from "./components/Input";
import Result from "./components/Result";
import styled from "styled-components";
import logo from "/images/logo.svg";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [percent, setPercent] = useState("");
  return (
    <Parent>
      <Header>
        <img src={logo} alt="" />
      </Header>
      <Common>
        <Input
          bill={bill}
          setBill={setBill}
          people={people}
          setPeople={setPeople}
          percent={percent}
          setPercent={setPercent}
        />
        <Result
          bill={bill}
          setBill={setBill}
          people={people}
          setPeople={setPeople}
          percent={percent}
          setPercent={setPercent}
        />
      </Common>
    </Parent>
  );
}
const Parent = styled.div`
  margin: 0 auto;
  height: 100vh;
  max-width: 55rem;
  @media (min-width: 90rem) {
    max-width: 93rem;
  }
`;
const Common = styled.div`
  border-radius: 25px 25px 0px 0px;
  background: #fff;
  box-shadow: 0px 32px 43px 0px rgba(79, 166, 175, 0.2);
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  @media (min-width: 90rem) {
    flex-direction: row;
    padding-left: 4.8rem;
    justify-content: space-between;
  }
`;
const Header = styled.header`
  text-align: center;
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
`;

export default App;
