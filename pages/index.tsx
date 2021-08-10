import Head from "next/head";
import styled from "styled-components";
// import Image from "next/image";

const Hero = styled.div`
  height: 35vh;
  display: flex;
  justify-content: center;
  align-items: top;
  background: #fff;
  /* border: 1px solid blue; */

  @media only screen and (max-width: 768px) {
    height: 20vh;
  }
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

const Body = styled.div`
  color: #000;
  font-weight: 700;
  font-size: 5rem;
  margin: 20px;
  /* justify-content: center;
  align-items: center; */
  text-align: center;
  margin-bottom: 50px;

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
    line-height: 2.6rem;
    margin-bottom: 150px;
  }
`;

const Tag = styled.span`
  color: orange;
  text-align: center;
  font-size: 4rem;
  font-style: italic;

  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export default function Home() {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <>
      <Head>
        <title>Amigo Mio Run Club</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Img>
        <img src="/amrc.png" alt="amrc logo" width={150} height={"auto"} />
      </Img>

      <Hero>
        <Heading>AMRC</Heading>
      </Hero>

      <Body>
        Run club based in Athens, GA
        <br />
        <Tag>#ConTodo</Tag>
      </Body>
    </>
  );
}
