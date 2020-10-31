import React from "react";
import "moment";
import "./TimeTracker.scss";
import moment from "moment";

class TimeTracker extends React.Component {
  render() {
    const allTimes = this.props.activities.map((obj, i) => {
      return (
        <div
          className={`row `}
          key={i}
        >
          <h4 className="row__day">{moment(obj.date).format("ddd")}</h4>
          <div className={`row__bar-container ${moment(obj.date).isSame(
            moment().format("YYYY-MM-DD")
          ) && "today"}`}>
            <p className="row__bar-container__white-text">{obj.text}</p>
            <div
              className="row__bar-container__bar"
              style={{
                width: `${
                  this.props.isRendered && obj.percentage ? obj.percentage : 0
                }%`
              }}
            ></div>
            <div
              className="row__bar-container__bar-bg"
              style={{ width: `100%` }}
            ></div>
            <p
              className="row__bar-container__black-text"
              style={{
                clipPath: `polygon(0 0, ${
                  this.props.isRendered && obj.percentage ? obj.percentage : 0
                }% 0, ${
                  this.props.isRendered && obj.percentage ? obj.percentage : 0
                }% 100%, 0 100%)`,
                WebkitClipPath: `polygon(0 0, ${
                  this.props.isRendered && obj.percentage ? obj.percentage : 0
                }% 0, ${
                  this.props.isRendered && obj.percentage ? obj.percentage : 0
                }% 100%, 0 100%)`,
              }}
            >
              {obj.text}
            </p>
          </div>
        </div>
      );
    });

    return (
      <div className="time-tracker">
        <div className="times-container">{allTimes}</div>
        <br />
        <div className="total">
          <h4 className="total__title">TOTAL</h4>
          <div className="total__time">
            <h4>
              {this.props.totalTime[0]} <span>hrs</span>{" "}
              {this.props.totalTime[1]} <span>mins</span>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default TimeTracker;
