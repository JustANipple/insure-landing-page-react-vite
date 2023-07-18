# Frontend Mentor - Insure landing page solution

This is a solution to the [Insure landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/insure-landing-page-uTU68JV8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](/public/design/screenshot-desktop.png)

### Links

- HTML Solution URL: [HTML](https://github.com/JustANipple/insure-landing-page-react-vite/blob/main/index.html)
- JSX Solution URL: [JSX](https://github.com/JustANipple/insure-landing-page-react-vite/blob/main/src/App.jsx)
- Live Site URL: [Live on Vercel](https://insure-landing-page-react-vite.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- CSS Modules
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev) - Vite

### What I learned

This time i worked with Vite. It is more intuitive for a React starter and i managed to work with useState to make menu icon change on click

```js
    const [icon, setIcon] = useState("images/icon-hamburger.svg");

    function handleClick(e) {
        e.target.getAttribute("src").includes("hamburger") ? 
        setIcon("images/icon-close.svg") : 
        setIcon("images/icon-hamburger.svg");
        document.querySelector("nav").classList.toggle(styles.open);
        document.body.classList.toggle("lockScroll");
    }
```

### Continued development

I will be using React with Vite more to make reusable components

### Useful resources

- [React docs](https://react.dev/learn) - With this official documentation i managed to use the useState with React
- [Vite docs](https://vitejs.dev/guide/) - Everything was easier with Vite, that made development and build and deployment easy

## Author

- Frontend Mentor - [@JustANipple](https://www.frontendmentor.io/profile/JustANipple)
