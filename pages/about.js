import Head from "next/head";
import styled from "styled-components";

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
    font-size: 5rem;
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

export default function About() {
  return (
    <>
      <Head>
        <title>AMRC: About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero>
        <Heading>
          {/* <span className="headingTitle">About</span> AMRC */}
          <Accent>ABOUT</Accent> AMRC
        </Heading>
      </Hero>

      <Body>
        <em>"Amigo Mio"</em> means <Accent>friend of mine</Accent> or{" "}
        <Accent>my friend</Accent> in Spanish. We're a run club for anyone &{" "}
        <Accent>everyone</Accent>, and we meet on Saturday mornings in Athens,
        GA. The morning consists of two runs, 1-2 mile(s) and then a 4 mile run,
        so runners at <Accent>any level</Accent> can join. Come for one, stay
        for both.
        <br />
        <br />
        <Accent>#ConTodo</Accent>
      </Body>
    </>
  );
}
