# UB SASE Website

This is the official project for the UB SASE website. This site is built with React and Tailwind and will be, in part, used as a learning experience for undergraduates for web development.

This website will serve as a center for SASE members and events.

## Tech stack

* Frontend: React + Vite
* Backend: NodeJS
* Styling: TailwindCSS
* Hosting: TBD

## Project Structure

``` ub-sase-website
ub-sase-website/
│── app/
│ ├── assets/       # Logos, images
│ ├── components/   # Navbar, Footer, shared UI
│ ├── pages/        # Home, About, Events, Leadership
│ ├── App.jsx
│ └── main.jsx
│── public/
│── package.json
│── README.md
```
## Getting started

To work on this project, download Node.js, which comes with the Npm, a package manager that will download all the dependencies for you.

After you clone the project, run the following command in the root project directory:

```
npm install
```

This installs all of the required libraries to run the website on your computer.

Run the following command in the root project directory to start a test server that updates the website when you save your code:

```
npm run dev
```

### About react

React is a framework for creating web apps without all the hassle of a huge HTML file and separate js files.

Each part of the website is contained in different functions that return a "HTML" snippet.

```
function page() {
    return (
        <>
        <h1>This is a page</h1>
        <p>In react</p>
        </>
    )
}
```

There are slight differences, which anyone familiar with HTML will immediately notice, like class now being className, but otherwise many things are the same.
For those who are new to all this, I suggest learning how to make a basic page in HTML first, then learning the differences in React.
Or simply look at the code for this website and figure it all out yourself. App.tsx and ExamplePlaceholder.tsx are commented for your education.

### About Tailwind

Tailwind is CSS framework that takes all the commonly used CSS attributes and puts them into classes,
so you can style your React HTML snippets without having to make and write in a separate CSS file. 

There is a HowToTailwind.txt file in the src folder that explains more.


