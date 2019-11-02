import React from "react";
import "weather-icons/css/weather-icons.css";
const Weather = props => {
  return (
    <div className="d-flex justify-content-center text-light">
      <div className="cards pt-4 font-weight-bold">
        <h1 className="font-weight-bold">{props.city}</h1>
        <h5 className="text-center py-4">
          <i className={`wi ${props.weatherIcon} display-2`}></i>
        </h5>
        {props.temp_celsius ? (
          <h1 className="text-center py-2 font-weight-bold pb-4">
            Current temp {props.temp_celsius}&deg;C
          </h1>
        ) : null}
        {minmaxTemp(props.temp_min, props.temp_max)}
        <h1 className="text-center py-4 font-weight-bold pb-5">
          {props.description}
        </h1>
      </div>
    </div>
  );
};
function minmaxTemp(min, max) {
  if (min && max) {
    return (
      <h3 className="text-center font-weight-bold">
        <span className="px-4">Min {min}&deg;C</span>
        <span className="px-4">Max {max}&deg;C</span>
      </h3>
    );
  }
}
export default Weather;
