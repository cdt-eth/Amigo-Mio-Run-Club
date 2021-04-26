import { useContext } from "react";
import Head from "next/head";
import styled from "styled-components";
import AuthContext from "../stores/authContext";

const Hero = styled.div`
  height: 71vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  margin: 20px;
  /* border: 1px solid red; */
  @media only screen and (max-width: 768px) {
    height: 55vh;
  }
`;

const Heading = styled.div`
  color: #000;
  font-weight: 900;
  font-size: 8rem;
  padding-right: 25px;
  margin-bottom: 50px;

  @media only screen and (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const Body = styled.p`
  color: #000;
  font-weight: 900;
  font-size: 5rem;
  padding-right: 25px;
  margin: 20px;

  @media only screen and (max-width: 768px) {
    font-size: 1.7rem;
    line-height: 2.6rem;
  }
`;

const Accent = styled.span`
  color: orange !important;
  font-style: italic;
`;

export default function Runs() {
  const { user, login } = useContext(AuthContext);

  return (
    <>
      <Head>
        <title>AMRC: Runs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero>
        <Heading>
          <Accent>
            {user !== null
              ? `${user.user_metadata.full_name}`.charAt(0).toUpperCase() +
                `${user.user_metadata.full_name}`.slice(1) +
                "'s"
              : "YOUR"}
          </Accent>{" "}
          RUNS
        </Heading>
      </Hero>

      <Body>
        Below you can see your <Accent>Strava</Accent> data from your most
        recent runs with AMRC. Feel free to add a note about how you feel the
        run went or anything <Accent>memorable</Accent> from the morning.
        <br />
        <br />
        <Accent>#ConTodo</Accent>
      </Body>
    </>
  );
}
