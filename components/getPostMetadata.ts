import  fs  from "fs";
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
         //content being returned from file [slugs]  after being encoded to Utf-8 which can be posted to html static.
      
      };
    });
     
    return posts;
  
  };

  export default getPostMetadata;