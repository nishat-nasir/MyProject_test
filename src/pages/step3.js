import React from 'react';
import './step3.css';

const Step3 = ({ toDoItems, setToDoItems }) => {
  // Function to move a to-do item to the next status
  const moveToDoItem = (index, newStatus) => {
    const updatedItems = [...toDoItems];
    updatedItems[index].status = newStatus;
    setToDoItems(updatedItems);
  };

  return (
    <div className="step-3">
      <div className="group-container">
        <div className="section-3-group">
          {/* ... Existing JSX ... */}
          <div className="section-51">
            <div className="rectangle-parent6">
              <div className="group-child2" />
              <div className="reserve-head3">
                <div className="reserve-head-child1" />
                <div className="done-wrapper">
                  <div className="in-progress1">Done</div>
                </div>
              </div>
            </div>
            {/* Display Done items */}
            <div className="done-list">
              <h2>Done Items</h2>
              <ul>
                {toDoItems.map((item, index) => (
                  item.status === 'done' && (
                    <li key={index}>
                      {item.text} -
                      <button onClick={() => moveToDoItem(index, 'todo')}>
                        Move to To-Do
                      </button>
                      <button onClick={() => moveToDoItem(index, 'in-progress')}>
                        Move to In Progress
                      </button>
                    </li>
                  )
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="task-board1">Task Board</div>
      </div>
    </div>
  );
};

export default Step3;
