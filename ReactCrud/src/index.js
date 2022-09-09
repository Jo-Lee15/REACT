import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserForm from "./UserForm";

var config = {
  apiKey: "AIzaSyCrX0eSk5wlATlav8jzsIvxY9JLpL9vqGM",
  authDomain: "react-project-d1276.firebaseapp.com",
  projectId: "react-project-d1276",
  storageBucket: "react-project-d1276.appspot.com",
  messagingSenderId: "294398738287",
  appId: "1:294398738287:web:e84e13e68c91b92dc7729a",
  measurementId: "G-3C0B82VVLQ"
};


firebase.initializeApp(config);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();