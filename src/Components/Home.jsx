import React from "react";
import Task from "./Task";

const Home = () => {
  return (
    <>
      <div className="container">
        <h1>DAILY GOAL</h1>
        <form>
          <input type="text" placeholder="Title" />
          <textarea placeholder="Description"></textarea>
          <button type="submit">ADD</button>
        </form>

        <Task />
      </div>
      <footer>
        <p>MADE WITH ❤️ BY RAHUL || ALL RIGHT RESERVED @2023</p>
      </footer>
      
    </>
  );
};

export default Home;
