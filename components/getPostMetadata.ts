import  fs  from "fs";
import matter from "gray-matter";
import { PostMetadata } from "../components/PostMetadata";

const getPostMetadata = (): PostMetadata[] =>{
    const folder = "posts/";
// fs.readdirSync synchronously gets to read file content of files ending with .md
    const files = fs.readdirSync(folder);  
    const markdownPosts = files.filter ((file) => file.endsWith (".md"));
    // get to return content and encode from md language to utf language. 
    const posts = markdownPosts.map((fileName) => {
      const fileContents = fs.readFileSync(`posts/${fileName}`, "utf-8");
      const matterResult = matter(fileContents);
      return {
        title : matterResult.data.title,
        date: matterResult.data.date,
        subtitle: matterResult.data.subtitle,
        slug: fileName.replace(".md", ""), //content being returned from file [slugs]  after being encoded to Utf-8 which can be posted to html static.
      };
    }); 
    return posts;
  };
  export default getPostMetadata;