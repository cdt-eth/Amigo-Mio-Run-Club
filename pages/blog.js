import Head from "next/head";
import styled from "styled-components";
import { createClient } from "contentful";

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

// connect to our Contentful account
export async function getStaticProps() {
  // Contentful credentials
  const client = createClient({
    // next.js adds these to our `process` object so we can access them
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "blog" });

  return {
    props: {
      blogs: res.items,
    },
  };
}

export default function Blog({ blogs }) {
  // pass in our props
  // log it for confirmation
  console.log(blogs);

  return (
    <>
      <Head>
        <title>AMRC: About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero>
        <Heading>
          <Accent>Blog</Accent> AMRC
        </Heading>
      </Hero>

      <Body>
        <Accent>The Blog</Accent> is a place to document runs.
        <br />
        <br />
        {blogs[0].fields.body.content[0].content[0].value}
        {/* {blogs.map((blog) => (
          <>
            <Accent key={blog.sys.id}>{blog.fields.title}</Accent>
            <div key={blog.sys.id}>
              {blog.fields.body.content[0].content[0].value}
            </div>
          </>
        ))} */}
        <br />
        <br />
      </Body>

      <Tag>#ConTodo</Tag>
    </>
  );
}
