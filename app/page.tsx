import  fs  from "fs";
import Link from "next/link";
import matter from "gray-matter";
import { PostMetadata } from "../components/PostMetadata";

const getPostMetadata = (): PostMetadata[] =>{
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter ((file) => file.endsWith (".md"));//gets to select the files that endwith .md
  
  //get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const matterResult = matter(fileContents);
    return {
      title : matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });
   
  return posts;

};

const Homepage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <div>
      <Link href={`/posts/${post.slug}`}> 
      <h1>{post.title}</h1> 
      </Link>
      <p>{post.subtitle}</p>
      <p>{post.date}</p>


     
      {/* added link that connects the homepage with the md files */}
    </div>
  ));

  return <div>{postPreviews}</div>;
};

export default Homepage;