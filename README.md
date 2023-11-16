# React-Based-WordleGame

open the web page by `npm run dev`

please watch the demo video for the project from file `React HW Demo - React.mp4`

In this assignment: 
1. Had 4+ different React components
2. One of those components receive props from a parent component
3. Added nested components
4. Some data passed from the child to the parent using state management tool - useContext
5. Added login/ signup part
6. Designed React useEffect hook to manage the state of the body element's CSS class.
7. Designed ReactDOM.createPortal to render a modal component outside its parent DOM hierarchy, typically at the end of the document body.
   The modal structure consists of an overlay, content container, a close button, a body section where the actual content (passed as children) is placed, and an action bar section.
8. Added Inputted value Validation Checking, the user cannot submit and a warning should be displayed on the page to ask them to submit a new word.  

## Writeup
### What were some challenges you faced while making this app?
It was a little hard to me to designe React useEffect hook to manage the state of the body element's CSS class.
and designe ReactDOM.createPortal to render a modal component outside its parent DOM hierarchy
### Given more time, what additional features, functional or design changes would you make
I will save the score of each user
### What assumptions did you make while working on this assignment?
I made a few assumptions based on common patterns and practices in React development. Here are the assumptions I made:

Usage of React and ReactDOM: I assumed that the code is written within a React component and that the ReactDOM library is imported for rendering portals.

Rendering in a Portal Container: The use of ReactDOM.createPortal suggests that the modal is intended to be rendered in a specific container with the id "modal-container" that exists outside the immediate parent-child relationship in the React component tree.

Event Handling: I assumed that the onClose function passed to the onClick event of the close button is meant to handle the modal closure.

Optional Action Bar: The presence of an optional action bar ({actionBar}) suggests that additional actions or buttons can be included in the modal, and this content is provided as a prop.

CSS Classes: I assumed that the CSS classes used in the JSX ("modal-overlay", "modal-content", "modal-close", "modal-body", "modal-action-bar") correspond to styles defined elsewhere in the project.

Functional Components: I assumed that this code is part of a functional React component.

Component Reusability: The structure of the modal suggests that it's designed to be a reusable component, with the content and action bar being passed as props (children and actionBar).

### How long did this assignment take to complete? 
1 day




