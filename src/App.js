// Utils
import React from "react";
import moment from "moment";
import "./App.scss";

// Components
import Weather from "./components/Weather/Weather";
import Title from "./components/Title/Title";
import TimeTracker from "./components/TimeTracker/TimeTracker";
import ProjectsList from "./components/TimeTracker/ProjectsList/ProjectsList";
import Loading from "./components/Loading/Loading";
import Schedule from "./components/Schedule/Schedule";
import Tasks from "./components/Tasks/Tasks";

// Data
import data from "./data";
const {weather, events, tasks, projects, totalTime, activities} = data;

class App extends React.Component {
  state = {
    displayLoading: true,
    isFetching: false,
    isFetchingActivity: false,
    time: moment().format("LT"),
    date: moment().format("D MMM YYYY"),
    selectedProject: "my-website-next",
    weather, 
    events, 
    tasks, 
    projects, 
    totalTime: totalTime[0], 
    activities: activities[0],
    isRendered: false,
    isReady: false,
    scheduleReady: false,
    tasksReady: false,
    activityReady: false,
  };


  manipulateTime = (time, minutes) => moment(time, "LT").add(minutes, "minutes").format("LT");


  componentDidMount() {
    this.setState({ isFetching: true, isFetchingActivity: true });
    setInterval(() => {
      const currentDate = moment();
      const currentTime = moment().format("LT");
      this.setState({
        time: currentTime,
        date: currentDate.format("D MMM YYYY"),
      });
    }, 1000);

    this.setState({
      isFetching: false,
      isFetchingActivity: false,
    });
    setTimeout(() => {
      this.setState({displayLoading: false});
    }, 2500);
  }

  projectsDropdownHandler = event => {    // Done
    this.setState({ isFetchingActivity: true });
    const projectName = event.target.value;
    if (projectName === this.state.projects[0]) this.setState({activities: activities[0], totalTime: totalTime[0]})
    if (projectName === this.state.projects[1]) this.setState({activities: activities[1], totalTime: totalTime[1]})
    this.setState({ isFetchingActivity: false });
  };

  addTaskHandler = e => {   // Done
    e.preventDefault();
    if (this.inputElement !== "") {
      const newTask = {
        id: this.state.tasks.length + 1,
        name: this.inputElement.value,
        isDone: 0,
      };

      this.setState({ tasks: [...this.state.tasks, newTask] });
      this.inputElement.value = "";
    }
  };

  deleteTaskHandler = taskId => {   // Done
    const item = document.querySelector(`.id-${taskId}`);
    const itemCheckbox = document.querySelector(".label__checkbox:checked");
    item.style.animationDelay = "0s";
    itemCheckbox.disabled = true;

    setTimeout(() => {
      item.classList.add("task-deleted");
    }, 1000);
    setTimeout(() => {
      const updatedTasksArr = this.state.tasks.filter(task => task.id !== taskId);
      this.setState({ tasks: updatedTasksArr });
    }, 1500);
  };

  onLoadedData = () => {    // Done
    setTimeout(() => {
      this.setState({ isReady: true });
    }, 10);
    setTimeout(() => {
      this.setState({ scheduleReady: true });
      document.body.style.overflow = "initial";
    }, 800);
    setTimeout(() => {
      this.setState({ tasksReady: true });
    }, 1100);
    setTimeout(() => {
      this.setState({ isRendered: true, activityReady: true });
    }, 1500);
  };

  render() {
    return (
      <div className="App">
        {this.state.displayLoading && (
          <Loading onLoadedData={this.onLoadedData} />
        )}
        <header
          className={`App__header ${this.state.isReady && "App__header-ready"}`}
        >
          <div className="date-col">
            <p>{this.state.date}</p>
          </div>
          <div className="weather-col">
            <Weather weather={this.state.weather} />
          </div>
          <div className="time-col">
            <p>{this.state.time}</p>
          </div>
        </header>
        <main className="App__main">
          <div
            className={`schedule-col ${this.state.isReady &&
              "schedule-col-ready"}`}
          >
            <Title title="SCHEDULE" />
            {this.state.events.length ? (
              <Schedule
                events={this.state.events}
                isRendered={this.state.scheduleReady}
              />
            ) : null}
          </div>
          <div
            className={`tasks-col ${this.state.isReady && "tasks-col-ready"}`}
          >
            <Title title="TASKS" />
            <form className="task-form" onSubmit={this.addTaskHandler}>
              <input
                ref={a => (this.inputElement = a)}
                className="task-form__input"
                type="text"
                placeholder="Add Task ..."
              />
              <button className="task-form__btn" type="submit">
                +
              </button>
            </form>
            <Tasks
              tasks={this.state.tasks}
              deleteTask={this.deleteTaskHandler}
              elementRef={this.elementRef}
              isRendered={this.state.tasksReady}
            />
          </div>
          <div
            className={`wakatime-col ${this.state.isReady &&
              "wakatime-col-ready"}`}
          >
            <Title title="CODING ACTIVITY" />
            <ProjectsList
              isFetchingActivity={this.state.isFetchingActivity}
              projectsDropdownHandler={this.projectsDropdownHandler}
              projects={this.state.projects}
            />
            <TimeTracker
              isRendered={this.state.isRendered}
              activities={this.state.activities}
              totalTime={this.state.totalTime}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
