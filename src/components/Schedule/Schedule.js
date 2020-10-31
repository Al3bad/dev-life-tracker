import React from "react";
import Event from "./Event/Event";
import "./Schedule.scss";

class Schedule extends React.Component {
  render() {
    let delay = -0.1;
    const eventList = this.props.events.map((event, i) => {
      return (
        <Event
          key={`event-${event.id}`}
          event={event}
          delay={(delay += 0.1)}
          isRendered={this.props.isRendered}
        />
      );
    });
    return (
      <div className="schedule">
        {this.props.events ? eventList : <h4>Nothing schedualed for today</h4>}
      </div>
    );
  }
}

export default Schedule;
