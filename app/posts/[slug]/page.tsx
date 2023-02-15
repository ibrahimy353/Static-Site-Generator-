import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";

const getPostContent = (slug: string) => {
  const folder ='posts/';
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync( file, "utf-8"); //file path with utf encoding
  const matterResult = matter(content);
  return matterResult;

};

const PostPage = (props: any) => {
  const slug = props.params.slug;//the .slug can be any name that u have used in the square brackets
  const post= getPostContent(slug);
  return (
    <div>
      <h1>{post.data.title}</h1>
      <Markdown>{post.content}</Markdown>
    </div>
  );
};
 export default PostPage;