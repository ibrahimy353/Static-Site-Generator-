import  fs  from "fs";
import Link from "next/link";
import matter from "gray-matter";

const getPostMetadata = () =>{
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter ((file) => file.endsWith (".md"));//gets to select the files that endwith .md
  
  //get gray-matter data from each file.
  const post = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`post/${fileName}`, "utf-8");
    const matterResult = matter(fileContents);
    return {
      title : matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: __filename.replace(".md", ""),
    };
  });
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