import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  height: 80px;
  background: #000;
`;

const Navbar = () => {
  return (
    <Nav>
      <h1>Navbar</h1>
    </Nav>
  );
};

export default Navbar;
