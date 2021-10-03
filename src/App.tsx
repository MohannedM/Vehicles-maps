import React from 'react'
import './App.css'
import Pages from './pages'
import { BrowserRouter } from 'react-router-dom'


const App = () => (
        <div className="App">
          <BrowserRouter>
            <Pages />
          </BrowserRouter>
        </div>
    );


export default App

