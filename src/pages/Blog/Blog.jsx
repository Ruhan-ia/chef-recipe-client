import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="w-[70%]">
        <h1 className="font-semibold text-3xl">
          Differences uncontrolled and Controlled Component:
        </h1>
        <p className="">
          Uncontrolled Components are the components that are not controlled by
          the React state and are handled by the DOM (Document Object Model). So
          in order to access any value that has been entered we take the help of
          refs. For instance, if we want to add a file as an input, this cannot
          be controlled as this depends on the browser so this is an example of
          an uncontrolled input. And In React, Controlled Components are those
          in which form’s data is handled by the component’s state. It takes its
          current value through props and makes changes through callbacks like
          onClick, onChange, etc. A parent component manages its own state and
          passes the new values as props to the controlled component.
        </p>
      </div>
      <div className="w-[70%]">
        <h1 className="font-semibold text-3xl">
          Validate React Props Using PropTypes:
        </h1>
        <p className="">
          React is a JavaScript library used for creating interactive web
          frontend applications. It is one of the most popular libraries because
          of its easy-to-use API. We combine components into an app by passing
          data from parent components to child components. To do this, we pass
          data with props. Props are like HTML attributes, but they can contain
          dynamic data. A parent component passes props down to child
          components. And child components receive them. We can pass any data as
          props. Therefore, we need a way to validate their data type so that
          the child component gets what they expect.
        </p>
      </div>
      <div className="w-[70%]">
        <h1 className="font-semibold text-3xl">
          Difference between nodejs and express js.:
        </h1>
        <p className="">
          Node.js is an open source and cross-platform runtime environment for
          executing JavaScript code outside of a browser. You need to remember
          that NodeJS is not a framework and it’s not a programming language.
          Most of the people are confused and understand it’s a framework or a
          programming language. We often use Node.js for building back-end
          services like APIs like Web App or Mobile App. It’s used in production
          by large companies such as Paypal, Uber, Netflix, Walmart and so on.
          Express js:Express is a small framework that sits on top of Node.js’s
          web server functionality to simplify its APIs and add helpful new
          features. It makes it easier to organize your application’s
          functionality with middle ware and routing. It adds helpful utilities
          to Node.js’s HTTP objects. It facilitates the rendering of dynamic
          HTTP objects.
        </p>
      </div>
      <div className="w-[70%]">
        <h1 className="font-semibold text-3xl">
        Custom hook, and why will you create a custom hook:
        </h1>
        <p className="">
          React.Js provides lots of built-in hooks that you can use in your
          React apps. But besides them, you can make your own custom hooks and
          use it in your apps resulting in better readability and a reduced
          amount of code. Custom hooks are normal JavaScript functions whose
          names start with “use” and they may call other hooks(built-in or
          custom). Custom hooks are a handy way to encapsulate hook-related
          logic that can be re-used across components when using component
          composition isn’t really something that will help, make sense, or just
          "look" semantically right. Think of a custom hook as a super-powered
          helper function.
        </p>
      </div>
    </div>
  );
};

export default Blog;
