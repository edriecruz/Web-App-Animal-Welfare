import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router} from 'react-router-dom'
import App from './App'
import 'antd/dist/antd.css'
import './index.css'
import { UserContextProvider } from './context/userContext'


ReactDOM.render(
  <Router>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </Router>,
  document.getElementById('root'),
);