---
title: 'Creating a Blog using Next JS 13, Typescript and Markdown'
date: 'March 23, 2023'
subtitle: 'Creating a Static Site Generator using Next JS 13'
---
# Ready to Blog? Here's How to Get Started Creating Your blog.

Creating a blog Static Site Generator(SSG) can be a great way to express your thoughts, share your knowledge, and build a community. You're not alone if you've ever been curious about how popular blogging sites like TUKO, Ghafla, and Kahawatungu were created and the tech stacks they used. As I began researching to understand the process of creating a blog from scratch to deployment, I discovered a vast wealth of information and resources available online. Through this journey, I learned how to create a blog based on the programming language I am conversant with and deploy it online, and now I'm excited to share my knowledge with you. On this website, I'll guide you through creating your blog, using Next JS and Markdown file that stores the information to deploying it online and sharing it with the world.
Why Use a Markdown file format as part of creating the blog❓.
- Markdown is a lightweight markup language that is easy to learn and use.
- It allows you to format text quickly and easily using a simple syntax.
- Markdown is highly customizable so you can add your own CSS styling.
- Since markdown blogs are typically statically rendered, they are fast and great for SEO.


Before starting to design how we want the blog to appear, it’s important to know how the written information on the markdown folder will be converted to the last step of getting the output. Below is the workflow diagram on how we shall get the desired outcome.
The Markdown file is converted into HTML using a static site generator (SSG) I created using Next Js and Tailwind CSS for styling. Picture design setup.

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
For this project, we will be using the latest Next JS 13, which changed its feature in how we set up the routing and layout structure of the React Framework Next JS 13 Directory.  [Next Js Docs](https://nextjs.org/blog/next-13).
- On the root folder, create a file called **'app'**  and add these files.
`head.tsx, layout.tsx, navbar.tsx, and page.tsx`. These are the critical building blocks of building the website (header, footer, and page that holds the entire children's content on the monitor). 
- On the root folder, create another folder and name it **'components'**; inside, add these files 
`getPostMetadata.ts, PostMetadata.ts and PostPreview.tsx`. These are route paths of the Metadata or marked.
- On the root folder, create another folder and call it **'Posts'**; inside it, add these markdown files 
 From this repo [here](https://github.com/ibrahimy353/.md-files). 
- To download the list of entire packages needed for the blog, download the **package.json** file from the repo above and run the command below on your command prompt.

```javascript
    npm init
```
- Finally, to view the next app on the web browser, type into the command terminal following; 

```bash
npm run dev
```
View the Next JS app through port [http://localhost:3000](http://localhost:3000/) on your browser to see the result.

## Creating the Blog
We start developing the blog by changing the head section title, which is the favicon seen on top of the website. Paste this inside
**app/head.tsx** .

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
To inject a custom style into the blog, we use Tailwind.css. Copy and paste the code below on the **styles/global.css** file.
More information on CSS from these [tailwindcss](https://v1.tailwindcss.com/docs/adding-base-styles) docs.

```javascript
@tailwind base;
@tailwind components;
@tailwind utilities;
```  
Inside the **/app/layout.tsx** paste the code below. Through this code, we got to add permanent components/building blocks of the blog that will appear on each page, the header, and the footer and styled them with Tailwind.css.


```javascript
import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";

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
        {header}
        {children}
        {footer}
      </div>
      </body>
  </html>
  );
};

```

To **Get information from the Markdown(.md) file** we pass the data through getPostMetadata using the code below. Copy and paste it to your **/components/getPostMetaData** file. 

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
Inside the code just above, we get to read file content from the **markdown** file and as well as also return encoded content from **[slug]** file.

To render the Metadata collected using the code above from the markdown(.md) file, we use **gray matter** to help with parsing the front matter from string to file. We also use **markdown to jsx** 3rd party package to assist in converting the markdown language to JSX file to a system that we get to pass the data using babel in the **postMetadata** to change it to a language that.

Create a new dynamic route folder on the root folder **'app'**, naming it **app/posts/[slugs]**. Add a file **page.tsx**. Inside the **page.tsx**, add the code below. For more information on dynamic routes, click here on [Next JS](https://nextjs.org/docs/routing/dynamic-routes/) .

```javascript
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
Through the code above, we get to convert the Markdown matter content, which is the data below front matter (data between -ve sign), ![front matter](https://user-images.githubusercontent.com/85551204/226348737-7b98c401-8cda-4e4c-9dc1-dc3bf0194d0e.JPG)
and encode it using utf to language that can be displayed on the electronic screen.
To generate a list of all the files paths that will be inside the **posts** folder statically; we use the Next JS feature (generateStaticParams) that allows us to return markdown files pages through **[slug]** from dynamic to a static site and thus improve it's loading performance. More information on  [generateStaticParams](https://beta.nextjs.org/docs/api-reference/generate-static-params).

Once the Markdown file path is created, we return or render the content to HTML using the code below from the markdown language on .md file. Copy and paste it on the  **components/PostMetadata.ts**.. 

```javascript
  export interface PostMetadata {
    title: string;
    date: string;
    subtitle: string;
    slug: string;
  }
```
From the code above, we pass the content **Title, date, subtitle, and slug** (the data below front matter).

Now that the entire blog content can be displayed on the screen, we get to create the preview of the post, which will be displayed on the homepage site together with other blogs or Markdown files using the code below. Copy and paste it on **components/PostPreview.tsx** page. We achieve this by creating a path to render the markdown front matter string into HTML content styled using Tailwind.css.


```javascript
import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
const PostPreview = (props: PostMetadata) =>{
   return (
    <div className="border border-violet-200 p-4 rounded-md shadow-md bg-white">
        <p className="text-sm text-slate-400">{props.date}</p>
        <Link href={`/posts/${props.slug}`}>
            <h2 className="font-bold text-violet-800 hover:underline mb-4">{props.title}</h2>
        </Link>
        <p className="text-slate-700">{props.subtitle}</p> 
    </div>
   );
};

export default PostPreview;
```

If you have opened and registered an account with [GitHub](https://github.com/), upload your new project onto your repository account. In our project,  local folder run the code below inside the terminal cmd or powershell.

 ```powershell
  npm run build
 ```

The command above creates a directory with a production build of your app, enabling you to host the website on your chosen server. For this project, I used [Vercel](https://vercel.com) a free hosting platform that supports Next JS projects. Create an account with it and link it to your GitHub account. More information on deploying GitHub projects with Vercel is
[Here](https://vercel.com/docs/concepts/deployments/git/vercel-for-github). Once completed, you can deploy your website blog and share it with others.

## Get the Entire Code from [HERE](https://github.com/ibrahimy353/Next-static-site-gen.git).



