import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// 가장 먼저 시작하는 단계
// root 객체를 들고 온다.
const root = ReactDOM.createRoot(document.getElementById('root'));
// useState를 사용하면 render를 사용하지 않아도됨.
// render는 innerHTML과 같다.
/** 앱안 쪽에 Router를 사용할 수 있게 됨. */
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
