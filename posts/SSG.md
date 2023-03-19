---
title: 'Creating a Blog using Next JS 13 and Markdown'
date: 'March 12, 2023'
subtitle: 'Creating a Static Site Generator using Next JS 13'
---
# Why should You create a blog?

Creating a blog Static Site Generator(SSG) can be a great way to express your thoughts, share your knowledge and build a community. If you've ever been curious about how popular blogging sites like TUKO, Ghafla, and Kahawatungu were created and the tech stacks they used, you're not alone. As I embarked on my own research to understand the process of creating a blog from scratch to deployment, I discovered a vast wealth of information and resources available online. Through this journey, I learned how to create a blog based on the programming language I am conversant with and deploy it online, and now I'm excited to share my knowledge with you. In this website, I'll guide you through the steps of creating your own blog, using Next JS and Markdown file that stores the information to deploying it online and sharing it with the world.

Why Use a Markdown file format as part of creating the blog.

- Markdown is a lightweight markup language that is easy to learn and use.
- It allows you to format text quickly and easily using simple syntax.
- Markdown is highly customizable, so you can add your own CSS styling.
- Since markdown blogs are typically statically rendered they are fast and great for SEO

Before starting to design on how I wanted the blog to appear, Its important to know the flow in which the written information on the markdown folder will be converted upto the last step of getting the output. Bellow is the workflow diagram on how we shall get the desired output.  

The Markdown file is converted into HTML using a static site generator (SSG) that I created using Next Js and Tailwind CSS for styling. Picture design setup.
  ![workflow](https://user-images.githubusercontent.com/85551204/219668894-57f8fb0a-332c-43e4-9784-11a9494b2bc0.JPG)

Once the HTML files are created we can then host it on to a web server and make it available to visitors
![workflow2](https://user-images.githubusercontent.com/85551204/219674838-e7bb1a3c-f52d-4d49-b122-a729a6664e8d.JPG)

##  Setting Up the Project 
Onto your favorite text editor.
- Generate a new Next JS app.

```bash
  npm init next-app@latest
```
- cd into the new folder

```bash
  cd my-project
```
Since we are using the latest Next JS 13 which changed its feature in how we set up the routing 
and layout structure of the React Framework Next JS 13 Directory. [Next Js Docs](https://nextjs.org/blog/next-13).
- On the root folder Create a file called **/app**  and add this to create this file and add this to create this file.
`head.tsx, layout.tsx, navbar.tsx, and page.tsx`.
- On root folder create another folder and name it 'components' inside it add these files 
`getPostMetadata.ts, PostMetadata.ts and PostPreview.tsx`.
- On root folder create a folder another folder and call it **Posts** inside it add these markdown files 
 From this repo [here](https://github.com/ibrahimy353/.md-files).
- Finally to view the next app on the command terminal run the following; 

```bash
npm run dev
```
View the Next JS app through port [http://localhost:3000](http://localhost:3000/) on your browser to see the result.

## Creating the Blog
To begin with we shall start with creating the head section
that is the favicon seen on top of the website.
**Paste this inside /app/head.tsx** 

```javascript
export default function Head() {
  return (
    <>
      <title>Name of your Blog</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}
```
Inside the **/app/layout.tsx** paste the code below. Through this code, we get to add permanent components/building blocks of the blog that will appear on each page that the navbar, header, and footer, and styled them with tailwind.CSS.


```dotnetcli
import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";
import NavBar from "../app/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center bg-slate-500 p-8 my-6 rounded-md">
        <Image src="/logo.png" width={60} height={60} className="mx-auto" alt={""}
        />
        <Link href="/">
          <h1 className="text-3xl text-white font-bold mt-3">Ibrahim Blog</h1>
        </Link>
        <p className="text-slate-300">
          Welcome to my static site generator
        </p>
      </div>
    </header>
  );
  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
        <h3>Developed by Ibra</h3>
      </div>
    </footer>
  );
  return (
    <html lang="en">
    {}
    <head />
    
    <body>
      <div className="mx-auto max-w-2xl px-10" >
        <NavBar/>
        {header}
        {children}
        {footer}
      </div>
      </body>
  </html>
  );
};

```

To **Get information from the Markdown(.md) file** we pass the data through getPostMetadata using the code bellow. Copy paste it to your **/components/getPostMetaData** file. 

```javascript
import  fs  from "fs";
import matter from "gray-matter";
import { PostMetadata } from "../components/PostMetadata";

const getPostMetadata = (): PostMetadata[] =>{
    const folder = "posts/";
// fs.readdirSync synchronously gets to read file content of files ending with .md
    const files = fs.readdirSync(folder);  
    const markdownPosts = files.filter ((file) => file.endsWith (".md"));
    // get to return content and encode from .md language to utf language. 
    const posts = markdownPosts.map((fileName) => {
      const fileContents = fs.readFileSync(`posts/${fileName}`, "utf-8");
      const matterResult = matter(fileContents);
      return {
        title : matterResult.data.title,
        date: matterResult.data.date,
        subtitle: matterResult.data.subtitle,
        slug: fileName.replace(".md", ""), 
//content being returned from file [slugs]  after being encoded to Utf-8 language which can be posted to html web.
      };
    }); 
    return posts;
  };
  export default getPostMetadata;
```
Inside the code just above we get to read file content from the **markdown** file and as well as also return encoded content from **[slug]** 
file.

To render the Metadata collected using code above from markdown(.md) file, we use **gray-matter** to help with parsing front matter from string to file, we also use **markdown to jsx** 3rd party package assist in converting the markdown language to JSX file system that we get to pass the data using babel in the **postMetadata** to change it to a language that.

Create a new dynamic route folder on the root folder **app** and name it **posts/[slugs]**. Inside the posts/[slugs] folder add a file  **page.tsx**. The **app/posts/[slugs]**. Inside this slugs add the code bellow. For more infomation on dynamic routes [click here](https://nextjs.org/docs/routing/dynamic-routes/) on Next JS 

```dotnetcli
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";

const getPostContent = (slug: string) => {
  const folder ='posts/';
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync( file, "utf-8"); //file path with utf encoding 
  const matterResult = matter(content);
  return matterResult;
};
//gets to generate static sites of the slugs rendered from post md files
export const generateStaticParams = async () =>{ 
  const posts = getPostMetadata ();
  return posts.map((post) =>({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;//the .slug can be any name that u have used in the square brackets
  const post= getPostContent(slug); 
  return (
    <div>
     <div className="my-12 text-center">
       <h1  className="text-2xl text-slate-600">{post.data.title}</h1>
       <p className="text-slate-400 mt-2">{post.data.date}</p>
     </div>
       <article className="prose prose-slate">
         <Markdown>{post.content}</Markdown>
       </article>
    </div>

   
  );
};
 export default PostPage;
```
Through the code above we get the convert the markdown file from language markdown 
language and encode it using utf to staticaly language that can be displayed on the electronic screen.