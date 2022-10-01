// import ReactDOM from 'react-dom/client';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <h1>Hello world</h1>
// );
// reportWebVitals();
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// ReactDOM.render(
// 	<BrowserRouter>
// 		<App />
// 	</BrowserRouter>,
// 	document.getElementById("root")
// );
