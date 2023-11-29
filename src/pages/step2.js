import React from "react";
import "./step2.css";

const Step2 = ({ toDoItems, setToDoItems }) => {
  // Function to move a to-do item to the next status
  const moveToDoItem = (index, newStatus) => {
    const updatedItems = [...toDoItems];
    updatedItems[index].status = newStatus;
    setToDoItems(updatedItems);
  };

  return (
    <div className="step-2">
      <div className="group-parent1">
        <div className="section-3-container">
          <div className="section-32">{/* ... Existing JSX ... */}</div>
          <div className="section-42">
            <div className="rectangle-parent13">
              <div className="group-child9" />
              <div className="reserve-head6">
                <div className="reserve-head-child4" />
                <div className="in-progress-container">
                  <div className="in-progress2">In progress</div>
                </div>
              </div>
            </div>
            {/* Display In-Progress items */}
            <div className="in-progress-list">
              <h2>In Progress Items</h2>
              <ul>
                {toDoItems.map(
                  (item, index) =>
                    item.status === "in-progress" && (
                      <li key={index}>
                        {item.text} -
                        <button onClick={() => moveToDoItem(index, "todo")}>
                          Move to To-Do
                        </button>
                        <button onClick={() => moveToDoItem(index, "done")}>
                          Move to Done
                        </button>
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>
          <div className="section-52">
            <div className="rectangle-parent13">
              <div className="group-child9" />
              <div className="reserve-head6">
                <div className="reserve-head-child4" />
                <div className="done-container">
                  <div className="in-progress2">Done</div>
                </div>
              </div>
            </div>
            {/* Display Done items */}
            <div className="done-list">
              <h2>Done Items</h2>
              <ul>
                {toDoItems.map(
                  (item, index) =>
                    item.status === "done" && (
                      <li key={index}>
                        {item.text} -
                        <button onClick={() => moveToDoItem(index, "todo")}>
                          Move to To-Do
                        </button>
                        <button
                          onClick={() => moveToDoItem(index, "in-progress")}
                        >
                          Move to In Progress
                        </button>
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="task-board2">Task Board</div>
      </div>
    </div>
  );
};

export default Step2;
