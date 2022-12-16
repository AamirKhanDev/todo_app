import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.json"
import "./main.css"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider>
    <Router>
        <App/>
  </Router>
</Provider>
)
