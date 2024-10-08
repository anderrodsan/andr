# Welcome to my new portfolio!

Welcome to my newest web portfolio, crafted using technologies and frameworks including NextJS, MDX, TypeScript, and TailwindCSS. This blog will focus on explaining why and how I created it on my own.

## Introduction

Firstly, I want to introduce you to my prior portfolios that enabled me to achieve
this result.

#### First Portfolio

I built my first web portfolio back in 2022 when I learned the basics of coding with React. I wanted to experiment with the
framework and present myself to the world in a creative way. With almost no
prior coding experience, I managed to code the one-page portfolio in less than
two weeks. As it was a personal project with no commercial purpose, I chose
[Github Pages](https://pages.github.com/) to host the website. You can still
find it at [My First Portfolio 2022](https://anderrodsan.github.io/portfolio/).

#### Second Portfolio

Last year (2023), I was introduced to the NextJS + TailwindCSS + Radix UI tech stack.
I immediately appreciated how easy the setup and app router system was, along with
the styling libraries that allowed me to enhance my websites with just a few lines
of code. After developing projects like [DormHive](https://www.dormhive.com/) and
gaining more experience, I realized I needed to rebuild my portfolio to apply everything
I had learned. I wanted to maintain simplicity, so I kept it as a single-page site.
I used UI component libraries like [Acceternity UI](https://ui.aceternity.com/) and
[Shadcn UI](https://ui.shadcn.com/) to give it an extra polished look.

This time, I selected [Vercel](https://vercel.com/) as the hosting platform for its ease and speed of deployment. The portfolio can still be found at [My Second Portfolio](https://andr-portfolio.vercel.app/).

#### Current Portfolio

Upon visiting my previous website, one might think there was no need to create a
new one. While that may be true, I had a compelling reason to do so. As my projects
grew, I wanted to start generating documentation and information about them, which
was not possible with my previous setup. This led me to create the current website,
which combines NextJS and MDX, making it ideal for blogs and improving its' SEO.
I also decided to divide the website into multiple pages such as About, Projects,
and Blog to provide more detailed information on each.

## Development Process

This section will guide you through my process of building the website, which is mainly divided in the following stages:

- **1. Requirements**: what does the website need to include?
- **2. Inspiration**: find inspiration from other similar websites or apps
- **3. Design**: how should the interface be designed?
- **4. Development**: which technologies should I use?

> Even though the process can be divided in some steps, I have worked using the agile model. This means I have iterated many times to achieve the current result, and as I get new ideas, more iterations will take place.

### Requirements

My goal when creating this web portfolio was to present myself and my development skills plus relevant work to future employers or collaborators. Hence, this website had to include the following:

- **Home page**: a summary of everything included in the website as my projects, tech stack, and most importantly call to action.
- **About Me**: a page where I include information about me with my skills, background and hobbies.
- **Projects**: a page to showcase my work, with filters, and articles explaining the process/outcome (this requires a markdown technology to easily write content).

In addition, I decided I wanted to include other non as relevant functionalities and sections as:

- **Blog**: some articles I want to share, such as this one (this requires a markdown technology to easily write content)
- **Bookmarks**: a space where I can easily find and recommend my favorite websites.
- **Share**: an easy way to shrae my portfolio with others.
- **Dark Mode**: provide different color palettes as the light/dark mode to the readers for a better user experience.

### Inspiration

#### Projects

I wanted to have a space where I could showcase my projects in the best way possible. When I finished my [Wordwise](https://andrs.vercel.app/projects/wordwise) app, I created some screenshot mockups for the App Store and as I loved them, I decided to do some also for the rest.

As an inspiration for the project page's interface, I went with the simple and effective look of the [App Store](https://www.apple.com/la/app-store/) and [SCRNSHTS](https://scrnshts.club/#google_vignette).

### Design

Once I had the idea in mind, I started designing the project page's interface using **Figma**. The initial layout was vertical, but I finally decided to go with a side layout, where the filters would be in the left side ocupying a small section of the page for space efficiency and easy filtering.

<img width="1000" src="https://andrs.vercel.app/images/blog/welcome-figma-projects.png" alt="Figma prototype of the projects.">

The rest of the website was designed while coding, but keeping the consistency with applying the same font, layout and a minimalist color palette including slate colors. The dark mode would include the darkest values as the slate-800 for the background with light fonts, while the light mode would include lighter colors such as slate-100 with dark fonts.

<img width="1000" src="https://andrs.vercel.app/images/blog/welcome-color-palette.png" alt="Slate color palette.">

## Web Development

This section will focus on the frameworks, languages and libraries used to code this website.

### Tech Stack

The website only includes static content and does not require any authentication, that is why there's no need of using backend services. I'll list the main frameworks, languages and libraries used to develop the website along with an explanation of why I chose them:

- **NextJS**: a framework in top of React, which is optimized for SEO, offers a file based routing system and Server Side Rendering (SSR). With lot's of libraries and documentation to work with.
- **Typescript**: JavaScript with syntax for types, for a better coding experience detecting mistakes.
- **TailwindCSS**: a styling library that enables writting CSS inside the HTML, making it easier and faster to style the website.
- **RadixUI + ShadcnUI**: a UI component library with interesting components to speed up the development.

### Additional Libraries

Instead of coding each blog or project post individualy, I decided to add the markdown functionality. I implemented it using the next-remote-mdx library, which enables reading the files located into the /content directory and render it as an HTML including custom components created by me. In this way, I will be able to write plain content including interactivity for a better user experience.

#### [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)

In addition, I used the sugar-high lightweight library to highlight the code when added into the
markdown file.

#### [sugar-high](https://github.com/huozhi/sugar-high)

The following link is not a library but the repository of [Lee Robinson](https://leerob.io/), which I've taken as an inspiration to develop the MDX library into my website.

#### [leerob.io](https://github.com/leerob/leerob.io)

The rest of the libraries include icons, framer animations, the dark mode wrapper and a top loader for enhancing the loading state of the website for a bettwe user experience.

#### [framer-motion](https://github.com/framer/motion)

#### [lucide-react](https://github.com/lucide-icons/lucide)

#### [react-icons](https://github.com/react-icons/react-icons)

#### [next-themes](https://github.com/pacocoursey/next-themes)

#### [nextjs-toploader](https://github.com/TheSGJ/nextjs-toploader)

### Hosting Services

This project is stored in a github repository and hosted in Vercel, those being my first options to deploy every other website I work with based on their fast and ease of usage.
