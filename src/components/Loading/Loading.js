import React from "react";
import "./Loading.scss";

class Welcoming extends React.Component {
  componentWillUnmount = () => {
    this.props.onLoadedData();
  };
  render() {
    return (
      <div className="loading">
        {/* <p>Fetching Data</p> */}
        <div className="lds-ring">
          <svg  viewBox="0 0 343 287" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 143.376L116.182 66.101V101.303L54.578 143.144L116.104 185.602L116.182 220.727L0 143.376Z" fill="white"/>
            <path d="M100.088 149.27H81.444V108.874H100.088V149.27Z" fill="white"/>
            <path d="M342.502 143.453L226.32 220.727V185.525L287.924 143.684L226.397 101.226L226.32 66.101L342.502 143.453Z" fill="white"/>
            <path d="M242.414 137.558H261.058V177.954H242.414V137.558Z" fill="white"/>
            <path d="M131.164 286.829L114.516 281.094L211.338 0L227.986 5.734L131.164 286.829Z" fill="white"/>
          </svg>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Welcoming;
