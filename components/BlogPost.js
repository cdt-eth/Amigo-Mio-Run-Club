import Link from "next/link";
import styled from "styled-components";
// import Image from "next/image";

export default function BlogPost({ blog }) {
  const { title, slug, runners, thumbnail } = blog.fields;

  const myLoader = ({ src, width, quality }) => {
    return `https:${src}/?w=${width}&q=${quality || 75}`;
  };

  //   const Runners = styled.div`
  //     color: #000;
  //     font-weight: 400;
  //     font-size: 2rem;
  //     padding-right: 25px;
  //     /* margin: 20px; */

  //     @media only screen and (max-width: 768px) {
  //       font-size: 1.7rem;
  //       line-height: 2.6rem;
  //     }
  //   `;

  return (
    <div>
      <h1>{title}</h1>
      <Link href={`/blogs/${slug}`}>
        <a>Read More</a>
      </Link>

      <p>{runners + " "} </p>

      {/* <Image
        src={`https:${thumbnail.fields.file.url}`}
        width={thumbnail.fields.file.details.image.width}
        height={thumbnail.fields.file.details.image.height}
      /> */}

      {/* <Image
        loader={myLoader}
        src={`${thumbnail.fields.file.url}`}
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
