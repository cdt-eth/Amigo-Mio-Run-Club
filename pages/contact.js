import Head from "next/head";
import styled from "styled-components";

const Hero = styled.div`
  height: 55vh;
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
    font-size: 4rem;
  }
`;

const Body = styled.p`
  color: #000;
  font-weight: 900;
  font-size: 5rem;
  padding-right: 25px;
  margin: 20px;

  @media only screen and (max-width: 768px) {
    font-size: 1.3rem;
    /* line-height: 2.6rem; */
  }
`;

const Accent = styled.span`
  color: orange !important;
  font-style: italic;
`;

export default function Contact() {
  return (
    <>
      <Head>
        <title>AMRC: Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <Heading>
          <Accent>CONTACT</Accent> AMRC
        </Heading>
      </Hero>

      <Body>
        <div className="intro">
          <div className="introItem">
            <p>
              Strava <span>@</span>
            </p>
            <a
              href="https://www.strava.com/clubs/amigomio"
              rel="noreferrer"
              target="_blank"
            >
              amigomio{" "}
            </a>
          </div>
          <div className="introItem">
            <p>
              Insta <span>@</span>
            </p>
            <a
              href="https://www.instagram.com/amigomiorunclub/"
              rel="noreferrer"
              target="_blank"
            >
              amigomiorunclub
            </a>
          </div>
          <div className="introItem">
            <p>
              Gmail <span>@</span>
            </p>
            <a href="mailto:amigomiorunclub@gmail.com">amigomiorunclub</a>
          </div>
        </div>

        <br />
        <br />

        <Accent>#ConTodo</Accent>
      </Body>
    </>
  );
}
