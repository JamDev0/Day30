import React from 'react'
import ReactDOM from 'react-dom/client'

import { Widget } from './modules/Widget'
import { App } from './modules/App'

import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Widget />
    <App />
  </React.StrictMode>
)
