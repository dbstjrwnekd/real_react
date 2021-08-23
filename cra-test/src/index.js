import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Button from "./Button";
import Box from "./Box";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <div>
    <Button size="big" />
    <Button size="small" />
    <Box size="big" />
    <Box size="small" />
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//process.env.{변수이름}
//process.env.NODE_ENV
//"npm start" => development
//"npm test" => test
//"npm run build" => production
//console.log("process.env.NODE_ENV : ", process.env.NODE_ENV);
//console.log("REACT_APP_API_URL : ", process.env.REACT_APP_API_URL);
//console.log("REACT_APP_TEMP1: ", process.env.REACT_APP_TEMP);
// REACT_APP_*
// set REACT_APP_API_URL=api.myapp.com npm start
