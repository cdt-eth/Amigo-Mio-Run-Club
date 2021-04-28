import Link from "next/link";
import styled from "styled-components";
// import Image from "next/image";

export default function BlogPost({ blog }) {
  const { title, slug, runners, thumbnail, miles } = blog.fields;

  //   const myLoader = ({ src, width, quality }) => {
  //     return `${src}?w=${width}&q=${quality || 75}`;
  //   };

  const Runners = styled.div`
    color: #000;
    font-weight: 400;
    font-size: 1rem;
    /* padding-right: 25px; */
    /* margin-bottom: 10px; */
    /* margin-bottom: 25px; */

    @media only screen and (max-width: 768px) {
      font-size: 1rem;
      /* line-height: 2.6rem; */
      /* margin-bottom: 10px; */
    }
  `;

  const Miles = styled.div`
    color: #000;
    font-weight: 400;
    font-size: 1rem;
    padding-right: 25px;
    margin-bottom: 25px;
    /* margin-bottom: 5px; */

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

    /* @media only screen and (max-width: 768px) {
      font-size: 1rem;
      line-height: 2.6rem;
    } */
  `;
  // console.log(runners);

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

      {/* <Runners></Runners> */}

      <Link href={`/blog/${slug}`}>
        <a className="ReadButton">Read More</a>
      </Link>

      {/* <p style={{ fontSize: 25 }}>{runners + " "} </p> */}

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

// <div>
//   <div className="mb-5">
//     <CoverImage
//       slug={slug}
//       title={title}
//       src={coverImage}
//       height={278}
//       width={556}
//     />
//   </div>

//   <h3 className="text-3xl mb-3 leading-snug">
//     <Link as={`/posts/${slug}`} href="/posts/[slug]">
//       <a className="hover:underline">{title}</a>
//     </Link>
//   </h3>

//   <div className="text-lg mb-4">
//     <DateFormatter dateString={date} />
//   </div>

//   <p className="text-lg leading-relaxed mb-4">{excerpt}</p>

//   <Avatar name={author.name} picture={author.picture} />
// </div>;
