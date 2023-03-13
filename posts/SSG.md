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

Here is a rough idea of how the project will flow. The Markdown file is converted into HTML using a static site generator (SSG). Picture design setup.
  ![workflow](https://user-images.githubusercontent.com/85551204/219668894-57f8fb0a-332c-43e4-9784-11a9494b2bc0.JPG)

Once the HTML files created we can then host it on to a web server and made available to visitors
![workflow2](https://user-images.githubusercontent.com/85551204/219674838-e7bb1a3c-f52d-4d49-b122-a729a6664e8d.JPG)

Now that we know the flow of how the site will come about then let's get to the most exciting part of the project. That's coding the blog using Next JS, Tailwind CSS and MD.
##  CREATING THE BLOG.
Onto your favorite text editor.
- Generate a new Next JS app. npm init next-app@latest
- cd into the new folder
- create a folder called app
- create a file called Header and Footer component


```bash
  cd my-project
```