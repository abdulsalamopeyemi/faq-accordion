# FAQ Accordion — Frontend Mentor Challenge

A responsive FAQ accordion built with React and SCSS as a solution to the [Frontend Mentor FAQ Accordion Challenge](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz).

## Overview

This project is an interactive FAQ accordion that allows users to expand and collapse answers to frequently asked questions.

The main goal was to recreate the provided design while practising React component structure, state management, conditional rendering, and responsive styling.

### Features

- Expand and collapse FAQ answers.
- Keep only one FAQ answer open at a time.
- Change between plus and minus icons based on the active question.
- Responsive layout for desktop and mobile devices.
- Keyboard-accessible accordion buttons.
- Hover and focus states for interactive elements.

### Screenshot

Add a screenshot of the completed project here.

### Links

- Live Site: https://sensational-cuchufli-af0f01.netlify.app/
- GitHub Repository: https://github.com/abdulsalamopeyemi
- Frontend Mentor Solution: https://www.frontendmentor.io/solutions/faq-accordion-react-and-scss-project-EUDWalvF0F

## Built With

- React
- JavaScript (ES6+)
- JSX
- SCSS (Sass)
- CSS Flexbox
- CSS Grid (during initial development)
- Create React App
- Git and GitHub

## What I Learned

Building this project helped me improve my understanding of several React concepts.

### React State Management

I learned how to use the `useState` Hook to manage the currently active FAQ question.

Initially, I managed state inside individual accordion items. I later learned how to lift state up to a parent component so that only one question could remain open at a time.

### Props and Component Communication

I practised passing data and functions from a parent component to child components using props.

This helped me understand how child components can trigger state updates managed by their parent.

### Conditional Rendering

I used conditional rendering to control the visibility of FAQ answers and switch between plus and minus icons.

### Responsive Styling

I used SCSS to organize styles, create reusable variables and mixins, and adapt the layout to different screen sizes.

## Challenges I Encountered

One of my biggest challenges was understanding how to manage the active accordion item using a shared state variable.

At first, I could open an answer but struggled to close it or ensure that opening another answer closed the previous one.

I resolved this by learning about lifting state up, passing callback functions through props, and comparing the active question ID with each item's ID.

I also encountered issues with referencing background images in SCSS and learned more about how assets in React's public directory are served.

## Continued Development

In future projects, I plan to improve my knowledge of:

- React component architecture
- State management and custom Hooks
- Accessibility
- Responsive web design
- Writing cleaner and more maintainable code

## Author

- Frontend Mentor — https://www.frontendmentor.io/profile/abdulsalamopeyemi
- GitHub — https://github.com/abdulsalamopeyemi/faq-accordion

## Acknowledgments

Challenge and design provided by [Frontend Mentor](https://www.frontendmentor.io/).
