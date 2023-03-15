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

Once the HTML files created we can then host it on to a web server and made available to visitors
![workflow2](https://user-images.githubusercontent.com/85551204/219674838-e7bb1a3c-f52d-4d49-b122-a729a6664e8d.JPG)

##  CREATING THE BLOG. 
Onto your favorite text editor.
- Generate a new Next JS app.

```bash
  npm init next-app@latest
```
- cd into the new folder

```bash
  cd my-project
```
- Since we are using the latest Next JS 13 which changed it's feature in how we set up
the routing and layout structure of the React Framework Directory. [Next Js Docs.](https://nextjs.org/blog/next-13).
- On the root folder Create a files called  **/app.** and add this create this  files.
`head.tsx, Layout.tsx, navbar.tsx, and page.tsx`.
- On root folder create another folder and name it 'components' inside it add this files 
`getPostMetadata.ts, PostMetadata.ts and PostPreview.tsx`.
- Finaly to view the next app use the terminal run 

```bash
npm run dev
```
and view the app Open [http://localhost:3000](http://localhost:3000/) with your browser to see the result.


Once done then lets jump into coding the blog. To begin with we shall start with creating the head section
that is the favicon seen on top of the website.
**Paste this inside /app/head.tsx** 

```bash
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
Inside the **/app/layout.tsx** paste this code bellow. Inside this code we get to add permernant components/building blocks of the blog
that will appear on each page thats the navbar, header, and footer and styled them with tailwind.CSS.

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
        <Image
          src="/logo.png"
          width={60}
          height={60}
          className="mx-auto"
          alt={""}
        />
        <Link href="/">
          <h1 className="text-3xl text-white font-bold mt-3">
            Ibrahim Blog
          </h1>
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
Because

