import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import 'alertifyjs/build/css/alertify.min.css';
/* import 'bootstrap/dist/css/bootstrap.min.css';
 */
import {BrowserRouter} from "react-router-dom";



ReactDOM.render(
   /* <React.StrictMode>  */
  <BrowserRouter>
    <App />
  </BrowserRouter>  
   /* </React.StrictMode> */ ,
  document.getElementById('root')
);
