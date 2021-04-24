import React, { useContext } from "react";
import styled from "styled-components";
import Link from "next/link";
import AuthContext from "../stores/authContext";

const Nav = styled.nav`
  height: 80px;
  background: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list
`;

const StyledLink = styled.a`
  padding: 0rem 2rem;
`;

const LoginButton = styled.li`
  padding: 0rem 2rem;
  list-style-type: none;
  cursor: pointer;
`;

export default function Navbar() {
  const { user, login } = useContext(AuthContext);
  console.log("Welcome " + user.user_metadata.full_name + "!");

  console.log(user);
  return (
    <Nav>
      <div>
        <Link href="/" passHref>
          <StyledLink>AMRC</StyledLink>
        </Link>
      </div>
      <div>
        <Link href="/" passHref>
          <StyledLink>Home</StyledLink>
        </Link>
        <Link href="/about" passHref>
          <StyledLink>About</StyledLink>
        </Link>
        <Link href="/contact" passHref>
          <StyledLink>Contact</StyledLink>
        </Link>
        <Link href="/runs" passHref>
          <StyledLink>Runs</StyledLink>
        </Link>
      </div>
      <LoginButton>
        <li onClick={login}>Login</li>
      </LoginButton>
    </Nav>
  );
}
