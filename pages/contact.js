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
    font-size: 3.5rem;
  }
`;

const Table = styled.p`
  padding-bottom: 25px;
  display: table;
  font-weight: 900;
  font-size: 5rem;
  padding-right: 25px;
  margin: 20px;

  @media only screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Row = styled.div`
  display: table-row;
  margin: 10px 0px 0px 0px;
`;

const Property = styled.p`
  display: table-cell;
  width: max-content;
  margin-bottom: 0;
`;

const Symbol = styled.span`
  float: right;
  padding-left: 10px;
  width: max-content;
`;

const URL = styled.span`
  display: table-cell;
  display: inherit;
  text-align: left;

  &:hover {
    color: orange;
  }
`;

const Accent = styled.span`
  color: orange;
  font-style: italic;
  font-weight: 900;
  padding-right: 25px;
  margin: 20px;

  @media only screen and (max-width: 768px) {
    margin: 0px;
  }
`;

const Tag = styled.span`
  color: orange;
  font-weight: 900;
  font-style: italic;
  font-size: 5rem;
  padding-right: 25px;
  margin: 20px;

  @media only screen and (max-width: 768px) {
    font-size: 1.7rem;
    line-height: 2.6rem;
  }
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

      <Table>
        <Row>
          <Property>
            Strava <Symbol>@</Symbol>
          </Property>
          <URL
            href="https://www.strava.com/clubs/amigomio"
            rel="noreferrer"
            target="_blank"
          >
            amigomio{" "}
          </URL>
        </Row>

        <Row>
          <Property>
            Insta <Symbol>@</Symbol>
          </Property>
          <URL
            href="https://www.instagram.com/amigomiorunclub/"
            rel="noreferrer"
            target="_blank"
          >
            amigomiorunclub
          </URL>
        </Row>

        <Row>
          <Property>
            Gmail <Symbol>@</Symbol>
          </Property>
          <URL href="mailto:amigomiorunclub@gmail.com">amigomiorunclub</URL>
        </Row>
      </Table>

      <br />
      <br />

      <Tag>#ConTodo</Tag>
    </>
  );
}
