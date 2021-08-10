import Link from "next/link";
import styled from "styled-components";
// import Image from "next/image";

interface IBlog {
  blog: {
    fields: {
      title: string;
      slug: string;
      runners: string[];
      miles: string;
      thumbnail: {
        fields: {
          file: {
            url: string;
          };
          title: string;
        };
      };
    };
  };
}

export default function BlogPost({ blog }: IBlog) {
  const { title, slug, runners, thumbnail, miles } = blog.fields;

  console.log("blog.fields.thumbnail", blog.fields.thumbnail);

  // console.log("blog.fields", blog.fields);

  //   const myLoader = ({ src, width, quality }) => {
  //     return `${src}?w=${width}&q=${quality || 75}`;
  //   };

  const Runners = styled.div`
    color: #000;
    font-weight: 400;
    font-size: 1rem;

    @media only screen and (max-width: 768px) {
      font-size: 1rem;
    }
  `;

  const Miles = styled.div`
    color: #000;
    font-weight: 400;
    font-size: 1rem;
    padding-right: 25px;
    margin-bottom: 25px;

    @media only screen and (max-width: 768px) {
      font-size: 1rem;
      line-height: 2.6rem;
      margin-bottom: 10px;
    }
  `;

  const BlogTitle = styled.h1`
    font-weight: 900;
    font-size: 2rem;
    margin: 10px 0px;
  `;

  return (
    <div className="blogPost">
      <img
        className="postImg"
        src={`https:${thumbnail.fields.file.url}`}
        style={{ objectFit: "cover", height: 400, width: "100%" }}
      />

      <BlogTitle>{title}</BlogTitle>

      <Runners>
        <b>Runners: </b>
        {runners.join(", ")}
      </Runners>

      <Miles>
        <b>Miles: </b> {miles}
      </Miles>

      <Link href={`/blog/${slug}`}>
        <a className="ReadButton">Read More</a>
      </Link>

      {/* <Image
        src={`https:${thumbnail.fields.file.url}`}
        width={thumbnail.fields.file.details.image.width}
        height={thumbnail.fields.file.details.image.height}
      /> */}

      {/*    <Image
         loader={myLoader}
         src={`https:${thumbnail.fields.file.url}`}
         width={thumbnail.fields.file.details.image.width}
         height={thumbnail.fields.file.details.image.height}
       /> */}
    </div>
  );
}
