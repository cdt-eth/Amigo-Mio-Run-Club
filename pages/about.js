import Head from "next/head";
import styled from "styled-components";

const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

const Heading = styled.div`
  color: #000;
  font-weight: 900;
  font-size: 5rem;

  @media only screen and (min-width: 768px) {
    font-size: 10rem;
  }
`;

export default function About() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero>
        <Heading>About</Heading>
      </Hero>
    </>
  );
}
