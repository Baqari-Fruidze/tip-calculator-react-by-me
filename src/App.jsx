import Input from "./components/Input";
import Result from "./components/Result";
import styled from "styled-components";
import logo from "/images/logo.svg";

function App() {
  return (
    <>
      <Header>
        <img src={logo} alt="" />
      </Header>
      <Common>
        <Input />
        <Result />
      </Common>
    </>
  );
}

const Common = styled.div`
  border-radius: 25px 25px 0px 0px;
  background: #fff;
  box-shadow: 0px 32px 43px 0px rgba(79, 166, 175, 0.2);
`;
const Header = styled.header`
  text-align: center;
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
`;
export default App;
