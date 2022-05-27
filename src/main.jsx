import React from 'react'
import ReactDOM from 'react-dom/client'

import { Widget } from './modules/Widget'
// import { TextIndex } from './modules/TextIndex'
import { Musics } from './modules/Musics'

import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Widget />
    <Musics/>
  </React.StrictMode>
)
