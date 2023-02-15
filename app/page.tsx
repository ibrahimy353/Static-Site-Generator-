import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";
import Link from "next/link";

const Homepage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key= {post.slug} {...post} />
  ));

  return <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>;
  //the grid grid column is for different screen size where in large screen shows two screen and in small screen it shows one column
};

export default Homepage;