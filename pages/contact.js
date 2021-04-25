import Head from "next/head";
import styled from "styled-components";

const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;

  @media only screen and (max-width: 768px) {
    height: 80vh;
  }
`;

const Heading = styled.div`
  color: #000;
  font-weight: 900;
  font-size: 5rem;

  @media only screen and (min-width: 768px) {
    font-size: 10rem;
  }
`;

export default function Contact() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero>
        <Heading>Contact</Heading>
      </Hero>
    </>
  );
}
