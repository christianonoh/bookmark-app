# Frontend Mentor - Bookmark landing page solution

This is a solution to the [Bookmark landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 
<details>
<summary>Table of contents</summary>

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
</details>

## Overview <a name="overview"></a>

### The challenge  <a name="the-challenge"></a>

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter form is submitted if:
  - The input field is empty
  - The email address is not formatted correctly

### Screenshot <a name="screenshot"></a>
![Screenshot 2023-12-06 at 07-16-12 Bookmark app](https://github.com/christianonoh/bookmark-app/assets/40442168/850bc541-5555-4ee0-ae7a-cbf94460bcc7)

### Links <a name="links"></a>
- Solution URL: [Github Repo](https://github.com/christianonoh/bookmark-app/)
- Live Site URL: [bookmark-app-pink.vercel.app](https://bookmark-app-pink.vercel.app/)

## My process <a name="my-process"></a>

### Built with <a name="built-with"></a>

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [TailwindCSS](https://tailwindcss.com/) - For styles

### What I learned <a name="what-i-learned"></a>

```css
.height__screen {
  height: 100vh;
  height: 100svh;
}
```
In a particular segment of my code, I implemented a responsive height styling for an element. Initially, I used the standard `100vh` unit, instructing the browser to set the element's height to 100% of the viewport height. However, considering the challenge of accommodating the browser tab space on mobile devices, I introduced a unit called `svh` as a potential solution.

The `svh` unit takes into consideration the space occupied by the browser tab on mobile screens, ensuring a more accurate representation of the available screen height. To enhance compatibility, I placed `100vh` as the primary unit, followed by `100svh` as a fallback for browsers that may not support the custom unit. This approach aims to create a visually consistent and responsive layout while accounting for potential variations in browser support.

This part of the code showcases a thoughtful consideration of cross-browser compatibility and a proactive approach to handling specific challenges, contributing to a robust and adaptive design. This [video](https://www.youtube.com/watch?v=ru3U8MHbFFI) by Kelvin was helpful as well.


### Useful resources <a name="useful-resources"></a>

- [Use these instead of vh](https://www.youtube.com/watch?v=ru3U8MHbFFI) - This helped me with choosing the unit to use for my viewport height. I really liked this pattern and will use it going forward.


## Author <a name="author"></a>

- Website - [Christian Onoh](https://christianonoh.vercel.app/)
- Frontend Mentor - [@christianonoh](https://www.frontendmentor.io/profile/christianonoh)
- Twitter - [@OnohChristian](https://www.twitter.com/OnohChristian)

## Acknowledgments <a name="acknowledgments"></a>

Special thanks to [Toyin](https://github.com/Theedon) for introducing me to Frontend Mentor and being a source of inspiration for this project.
