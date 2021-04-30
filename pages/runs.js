import { useContext, useEffect, useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import AuthContext, { AuthContextProvider } from "../stores/authContext";
import { useRouter } from "next/router";

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
`;

const Error = styled.p`
  color: red;
  color: white;
  background: orange;
  background: red;
  padding: 20px;
  border-radius: 7px;
  font-weight: 900;
  font-style: italic;
  font-size: 5rem;
  padding-right: 25px;
  margin: 20px;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 1.7rem;
    line-height: 2.6rem;
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

export default function Runs() {
  const { user, authReady, login } = useContext(AuthContext);
  const [runs, setRuns] = useState(null);
  const [error, setError] = useState(null);

  // next.js router
  const router = useRouter();

  // useEffect(() => {
  //   // redirect them back to the homepage
  // if (!user) {
  //     router.push("/");
  //     console.log("logged out -> home page");
  //   }
  // }, [user]);

  useEffect(() => {
    if (authReady) {
      fetch(
        "/.netlify/functions/runData",
        user && {
          headers: {
            Authorization: `Bearer ${user.token.access_token}`,
          },
        }
      )
        .then((res) => {
          if (!res.ok) {
            login();
            throw Error("Login to view your run data.");
          }
          return res.json();
        })
        .then((data) => {
          setError(null);
          setRuns(data);
          console.log("data: ", data);
          console.log("data[0]: ", data[0]);
          console.log("data[0].title: ", data[0].title);
        })
        .catch((err) => {
          setError(err.message);
          setRuns(null);
        });
    }
  }, [user, authReady]);

  // console.log("runs: ", runs);
  // console.log("runs[0]: ", runs[0]);
  // console.log("runs[1]: ", runs[1]);
  // console.log("runs.title: ", runs.title);

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
      </Body>

      {!authReady && <Error>Loading...</Error>}

      {error && <Error>{error}</Error>}

      {runs && runs.map((run) => run.title)}
      <br />
      {runs && runs.map((run) => run.location)}
      <br />

      <Tag>#ConTodo</Tag>
    </>
  );
}
