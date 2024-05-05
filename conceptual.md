### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a JavaScript library used in building user interfaces in web applications. It is used when making interactive and dynamic UIs especially when the applications are large scale applications whose codebases may be lengthy.

- What is Babel?
Babel is a JavaScript compiler that enables the use of ECMAScript features in code regardless of the environment supporting  these features.

- What is JSX?
JSX is a syntax extension used in React applications to describe UI components.

- How is a Component created in React?
In React a component is created by defining a JavaScript function or class that represents a reusable piece of UI.

- What are some difference between state and props?
1) State is interenal to a component and controlled by the component itself while props are passed from parent component to child component.

2) State is used to manage component-specific data that can change over time, such as user input while props are used to pass data from parent components to child components.

3) Each compenent manages their own state while child componenets are given their properties by their parent component.

- What does "downward data flow" refer to in React?
This refers to the pattern where properties are passed from the parent component to the child components. It allows for the creation of mkdular, reusable components allowing the application itself to be maintained easier.

- What is a controlled component?

A controlled component is a React component whose value is controlled by React state

- What is an uncontrolled component?
An uncontrolled component in React is a component where the form data is handled by the DOM itself rather than by React state.

- What is the purpose of the `key` prop when rendering a list of components?
The key prop in React is used to uniquely identify elements in a list of components. When rendering a list of components, React uses the key prop to efficiently update the components and maintain their state across renders.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
 Array indices are not stable identifiers. If the order of the elements in the list changes, or if elements are added or removed, the indices of the elements will change accordingly, leading to unexpected behavior.

- Describe useEffect.  What use cases is it used for in React components?

A `useEffect` is a built-in hook in React that allows functional components to perform side effects. Side effects refer to any actions or operations that a component might perform outside of rendering, such as fetching data from an API, subscribing to external events, updating the DOM, or setting up timers.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
A `useRef` is a built-in hook in React that returns a mutable ref object whose current property is initialized to the provided argument (initial value). Changing a ref value does not cause a re render in React.

- When would you use a ref? When wouldn't you use one?
A ref in React when you need to access or manage a DOM element directly, store mutable values that do not trigger re-renders, or perform imperative actions such as focusing an input field, triggering animations, or integrating with third-party libraries. Tehy should not be used when trying to trigger a re-render.

- What is a custom hook in React? When would you want to write one?

A custom hook in React is a JavaScript function that leverages existing React hooks (such as useState, useEffect, useContext, etc.) to encapsulate logic and stateful behavior that can be reused across multiple components. Custom hooks allow you to extract common patterns and share stateful logic between components without duplicating code.
