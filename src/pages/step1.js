import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./step1.css";
const Step1 = () => {
  // Step 1: Create state using useState
  const [toDoItems, setToDoItems] = useState([]);

  // Step 2: Function to add a new to-do item
  const addTodo = () => {
    const newTodo = { text: "New To-Do", status: "todo" };
    setToDoItems([...toDoItems, newTodo]);
  };

  return (
    <div className="step1">
      <div className="group-parent">
        <div className="section-3-parent">
          <div className="section-3">
            <div className="rectangle-parent">
              <div className="group-child" />
              <div className="reserve-head">
                <div className="reserve-head-child" />
                <div className="to-do">To do</div>
              </div>
            </div>
            <div className="rectangle-group">
              <div className="group-item" />
              <div className="price">
                <div className="name">Name</div>
                <div className="form">
                  <div className="form-child" />
                  <div className="enter-name">Enter name</div>
                </div>
              </div>
              <div className="price1">
                <div className="name">Number</div>
                <div className="form">
                  <div className="form-child" />
                  <div className="enter-number">Enter number</div>
                </div>
              </div>
              <div className="price2">
                <div className="name">Date</div>
                <div className="form">
                  <div className="form-child" />
                  <div className="ddmmyyyy">DD/MM/YYYY</div>
                </div>
              </div>
              <div className="rectangle-container" onClick={addTodo}>
                <div className="group-inner" />
                <div className="create">Create</div>
              </div>
            </div>
          </div>
          <div className="section-4">
            <Link to="/in-progress">In Progress</Link>
          </div>
          <div className="section-5">
            <div className="rectangle-parent">
              <div className="group-child" />
              <div className="reserve-head">
                <div className="reserve-head-child" />
                <div className="done">Done</div>
              </div>
            </div>
          </div>
        </div>
        <div className="task-board">Task Board</div>
      </div>

      {/* Display To-Do items */}
      <div className="to-do-list">
        <h2>To-Do Items</h2>
        <ul>
          {toDoItems.map((item, index) => (
            <li key={index}>{item.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Step1;
