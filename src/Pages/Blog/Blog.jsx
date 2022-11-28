import React from "react";
// blog page show blog
const Blog = () => {
  return (
    <div>
      <div className="border-2 px-14 py-8 m-6 w-3/4 mx-auto shadow-xl">
        <h3 className="text-2xl font-semibold">
          What are the different ways to manage a state in a React application?
        </h3>
        <p>
          The Four Kinds of React State to Manage Local state. Global state.
          Server state. URL state.
        </p>
      </div>
      <div className="border-2 px-14 py-8 m-6 w-3/4 mx-auto shadow-xl">
        <h3 className="text-2xl font-semibold">
          How does prototypical inheritance work?
        </h3>
        <p>
          The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects. It is a method by which an object
          can inherit the properties and methods of another object
        </p>
      </div>
      <div className="border-2 px-14 py-8 m-6 w-3/4 mx-auto shadow-xl">
        <h3 className="text-2xl font-semibold">
          What is a unit test? Why should we write unit tests?
        </h3>
        <p>
          Unit Testing is a testing method that tests an individual unit of
          software in isolation. Unit testing for React Apps means testing an
          individual React Component. “Unit testing is a great discipline, which
          can lead to 40% - 80% reductions in bug density.” - Eric Elliot
        </p>
      </div>
      <div className="border-2 px-14 py-8  m-6 w-3/4 mx-auto shadow-xl">
        <h3 className="text-2xl font-semibold">React vs. Angular vs. Vue?</h3>
        <p>
          Vue provides higher customizability and hence is easier to learn than
          Angular or React. Further, Vue has an overlap with Angular and React
          with respect to their functionality like the use of components. Hence,
          the transition to Vue from either of the two is an easy option.
        </p>
      </div>
    </div>
  );
};

export default Blog;
