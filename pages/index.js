import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import { createClient } from "contentful";

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

// connect to our Contentful account
export async function getStaticProps() {
  // Contentful credentials
  const client = createClient({
    // next.js adds these to our `process` object so we can access them
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "blog" });

  return {
    props: {
      blogs: res.items,
    },
  };
}

export default function Home({ blogs }) {
  console.log("this ran - blogs:");
  // console.log("blogs:", blog);
  console.log(blogs);

  return (
    <>
      <Head>
        <title>Amigo Mio Run Club</title>
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
