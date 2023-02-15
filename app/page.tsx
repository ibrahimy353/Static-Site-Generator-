import  fs  from "fs";
import Link from "next/link";

const getPostMetadata = () =>{
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter ((file) => file.endsWith (".md"));//gets to select the files that endwith .md
  const slugs = markdownPosts.map((file) => file.replace (".md", ""));
  return slugs;
};

const Homepage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((slug) => (
    <div>
      <Link href={`/posts/${slug}`}> 
      <h1>{slug}</h1>
      </Link>
      {/* added link that connects the homepage with the md files */}
    </div>
  ));

  return <div>{postPreviews}</div>;
};

export default Homepage;