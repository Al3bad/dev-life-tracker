import React from "react";
import moment from "moment"
import "./Event.scss";

const Event = props => {
  return (
    <div className={`event ${props.isRendered && "event-ready"}`} style={{animationDelay: `${props.delay}s`}} >
      <p className="event__name">{props.event.name}</p>
      <div className="event__time-container">
        <p className="event__time-container__time-start">{moment(props.event.start).format("h:mmA")}</p>
        <div className="event__time-container__line"></div>
        <p className="event__time-container__time-end">{moment(props.event.end).format("h:mmA")}</p>
      </div>
    </div>
  );
};

export default Event;