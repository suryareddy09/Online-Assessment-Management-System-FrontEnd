import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';
import 'mdbootstrap/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'mdbootstrap/css/mdb.css';
import './index.css';
import App from "./App";

let root1=document.getElementById('root');
let root2=ReactDOM.createRoot(root1);
root2.render(<App/>);

