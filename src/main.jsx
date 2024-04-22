import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import App2 from './App2.jsx'
import App3 from './App3.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/** Description
    <App /> 하병노
      - React 기초문법
    <App2 /> 노수빈
      - 변수형 Button 컴포넌트(props: func, children)를 이용하는 함수형 App2 컴포넌트
    <App3 /> 노수빈
      - 검색 및 조회
    */}
    <App3 />
  </React.StrictMode>,
)
