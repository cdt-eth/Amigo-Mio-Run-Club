import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    // take our contentful data and store in a local "items" object
    content_type: "blog",
  });

  const paths = res.items.map((item) => {
    return {
      params: {
        slug: item.fields.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "blog",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }

  return {
    props: {
      blog: items[0],
    },
  };
}

export default function BlogContent({ blog }) {
  // if (!blog) return <Loading />;

  const { title, featuredImage, body, miles, location, runners } = blog.fields;

  return (
    <div style={{ height: "100%", margin: 20 }}>
      <h1>{title}</h1>

      <h3>
        {runners.length < 2 ? (
          <span>I, {runners},</span>
        ) : runners.length === 2 ? (
          <span>
            We, {runners[0]} and {runners[1]},
          </span>
        ) : (
          <span>We ({runners.join(", ")})</span>
        )}{" "}
        ran {miles} miles around {location}.
      </h3>

      <img
        className="postImg"
        src={`https:${featuredImage.fields.file.url}`}
        style={{ objectFit: "cover", height: 400, width: "100%" }}
      />

      <h4>Runners: {runners.join(", ")}</h4>

      <div>{documentToReactComponents(body)}</div>
    </div>
  );
}
