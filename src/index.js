import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { bookReducer } from './store/Book';
import {compose, createStore} from 'redux';
const myStore = createStore(bookReducer,composeWithDevTools());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={myStore}>
    <App />
    </Provider>
  </React.StrictMode>
  
);

reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import { composeWithDevTools } from '@redux-devtools/extension';
// import { bookReducer } from './store/Book';


// const myStore = createStore(bookReducer,composeWithDevTools());

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>

//     <Provider store={myStore}>
//       {/* כך שיתפנו את הסטור לכל הקומפוננטות 
//       ולרידוסר שמאוחסן כאן ישוגרו כל הפעולות מתוך האתר 
//       שנשלחות עם דיספצ */}
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
