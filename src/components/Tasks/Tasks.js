import React from "react";
import "./Tasks.scss";

const Tasks = props => {
    let delay = -0.1;
  const tasks = props.tasks.map((task, i) => {
    return (
      <li key={task.id} className={`tasks-list__item id-${task.id} ${props.isRendered && "task-ready"}`} style={{animationDelay: `${(delay += 0.1)}s`}}>
        <label className="label">
          <input onClick={props.deleteTask.bind(this, task.id )} className="label__checkbox" type="checkbox" />
          <span className="label__text">
            <span className="label__check">
              <i className="fa fa-check icon"></i>
            </span>
          </span>
        </label>
        {task.name}
      </li>
    );
  });
  return <ul className="tasks-list">{tasks}</ul>;
};

export default Tasks;
