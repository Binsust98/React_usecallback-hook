import React from 'react';
import ReactDOM from 'react-dom';


import reportWebVitals from './reportWebVitals';
import './index.css';
// import App from './App';

import ToolbarApp from './componets/custo-hook-demo';

ReactDOM.render(
  <React.StrictMode>
    < ToolbarApp />
  </React.StrictMode>,
  document.getElementById('root')
);



// import UseMemoApp from './componets/memoHook-demo';
// ReactDOM.render(
//   <React.StrictMode>
//     < UseMemoApp/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );







// import App from './componets/callbackcomp/Todo-index';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
