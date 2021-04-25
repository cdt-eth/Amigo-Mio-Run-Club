import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";

const Hero = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: top;
  background: #fff;
  /* border: 1px solid blue; */
`;

const Img = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10vh;
  /* border: 1px solid red; */
`;

const Heading = styled.div`
  color: #000;
  font-weight: 900;
  font-size: 5rem;

  @media only screen and (min-width: 768px) {
    font-size: 10rem;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Img>
        <Image src="/amrc.png" alt="amrc logo" width={100} height={70} />
      </Img>

      <Hero>
        <Heading>AMRC</Heading>
      </Hero>
    </>
  );
}
