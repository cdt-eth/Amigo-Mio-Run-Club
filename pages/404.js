import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Hero = styled.div`
  height: 71vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  margin: 20px;

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

const Body = styled.div`
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
  cursor: pointer;
`;

const Error = styled.span`
  color: orange !important;
  font-style: italic;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
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

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, []);

  return (
    <>
      <Head>
        <title>AMRC: About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero>
        <Heading>
          <Accent>404!</Accent>
        </Heading>
      </Hero>

      <Body>
        Let's go{" "}
        <Link href="/">
          <Error>home</Error>
        </Link>
        . <br />
        You'll get 'em next time.
        <br />
        <br />
      </Body>

      <Tag>#ConTodo</Tag>
    </>
  );
}
