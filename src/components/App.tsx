import { Route } from "react-router-dom";
import styled from "styled-components/macro";
import Header from "./Header";
import Persons from "./Persons";
import AboutMe from "./AboutMe";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Route exact path="/" component={Persons} />
        <Route path="/about-me" component={AboutMe} />
      </Main>
      <Footer />
    </>
  )
}

export default App;

const Main = styled.main`
  min-width: 320px;
  width: 80%;
  max-width: 1200px;
  margin: 50px auto 50px auto;
`;
