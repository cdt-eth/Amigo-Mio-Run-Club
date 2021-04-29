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
  list-style-type: none;

  @media only screen and (max-width: 768px) {
    flex: wrap;
    padding: 0px 20px;
  }
`;

const StyledLink = styled.a`
  padding: 0rem 2rem;

  &:hover {
    color: orange;
    /* opacity: 0.5; */
    transition: 0.3s;
  }

  @media only screen and (max-width: 768px) {
    padding: 0rem;
    /* border: 1px solid red; */
  }
`;

const StyledUser = styled.a`
  padding: 0rem 2rem;
  display: flex;
  align-items: center;
  margin-right: 0px;

  &:hover {
    opacity: 0.5;
    transition: 0.3s;
  }

  @media only screen and (max-width: 768px) {
    padding: 0rem;
    margin-right: 5px;
    /* border: 1px solid red; */
  }
`;

const LoginButton = styled.li`
  display: flex;
  list-style-type: none;
  cursor: pointer;
  height: 25px;
  /* border: 1px solid blue; */
  padding: 0rem 1rem;

  &:hover {
    opacity: 0.5;
    transition: 0.3s;
  }

  @media only screen and (min-width: 768px) {
    padding: 0rem 2em;
    height: 25px;
  }
`;

export default function Navbar() {
  const { user, login, logout, authReady } = useContext(AuthContext);
  // console.log("Welcome " + user.user_metadata.full_name + "!");

  // console.log({ user });

  return (
    <Nav>
      <div>
        <Link href="/" passHref>
          <StyledLink>
            <img className="icon" src="amrc-white.png" />
          </StyledLink>
        </Link>
      </div>

      {authReady && (
        <>
          <div className="midNav">
            <Link href="/about" passHref>
              <StyledLink>About</StyledLink>
            </Link>

            <Link href="/blog/" passHref>
              <StyledLink>Blog</StyledLink>
            </Link>

            <Link href="/contact" passHref>
              <StyledLink>Contact</StyledLink>
            </Link>

            <Link href="/runs" passHref>
              <StyledLink>Runs</StyledLink>
            </Link>

            {/* {user !== null ? (
              <Link href="/runs" passHref>
                <StyledLink>Runs</StyledLink>
              </Link>
            ) : null} */}
          </div>

          {!user && <LoginButton onClick={login}>Login</LoginButton>}
          {user && (
            <LoginButton onClick={logout}>
              Logout, {user.user_metadata.full_name}
            </LoginButton>
          )}
        </>
      )}
      {/* <img className="icon" src="user.png" /> */}
    </Nav>
  );
}
