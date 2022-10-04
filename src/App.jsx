import React from 'react'
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { England } from './container/PageEngland/England';
import { French } from './container/PageFrench/French';
import { Header } from './components/Header/Header';
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
      <Routes>
        <Route exact path="/premiereleague" element={<England />} />
        <Route exact path="/ligue1" element={<French/>} />
      </Routes>
    </BrowserRouter>
   

    </div>
  )
}
export default App;
