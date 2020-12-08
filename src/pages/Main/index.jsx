import React from "react";

import Header from "../../common/Header";
import Content from "../../common/Content";
import Menu from "../../common/Menu";
import Container from "../../common/Container";

import "./style.css";

const Main = (props) => {
  return (
    <div className="ma-div-main">
      <div className="ma-div-main-header">
        <Header />
      </div>
      <div className="ma-div-main-sidebar">
        <Menu />
      </div>

      <div className="ma-div-main-container">
        <Content>
          <Container>{props.children}</Container>
        </Content>
      </div>
    </div>
  );
};

export default Main;
