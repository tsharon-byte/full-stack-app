import styled from "styled-components";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MyMenu from "./components/MyMenu";
import About from "./pages/About";
import Home from "./pages/Home";

const StyledMain = styled.div`
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;
  height: 80vh;
`;

function App() {
  const [users, setUsers] = useState();

  const getUsers = () => {
    fetch("/api/users")
      .then((res) => res.json())
      .then(setUsers);
  };

  return (
    <Router>
      <MyMenu />
      <StyledMain>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>
      </StyledMain>
    </Router>
  );
}

export default App;
