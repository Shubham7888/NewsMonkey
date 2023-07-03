import { useState } from 'react';
import React  from 'react'
import './App.css';
import Navbar from './component/Navbar';
import News from './component/News';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'

const App =()=>{
  const pageSize=5;
 
  const [progress,setProgress]=useState(0);


    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar height={3} color='#f11946' progress={progress}/>
        
        <Routes>
        <Route path="/" element={<News  setProgress={setProgress} pageSize={pageSize} key="general" country="in" category="general"/>}/>
          <Route path="/business" element={<News setProgress={setProgress} pageSize={pageSize} key="business" country="in" category="business"/>}/>
          <Route path="/entertainment" element={<News setProgress={setProgress} pageSize={pageSize} key="entertainment" country="in" category="entertainment"/>}/>
          <Route path="/general" element={<News setProgress={setProgress} pageSize={pageSize}key="general" country="in" category="general"/>}/>
          <Route path="/health" element={<News setProgress={setProgress} pageSize={pageSize} key="health" country="in" category="health"/>}/>
          <Route path="/science" element={<News setProgress={setProgress} pageSize={pageSize} key="science" country="in" category="science"/>}/>
          <Route path="/sports" element={<News setProgress={setProgress} pageSize={pageSize} key="sports" country="in" category="sports"/>}/>
          <Route path="/technology" element={<News setProgress={setProgress} pageSize={pageSize} key="technology" country="in" category="technology"/>}/>
        </Routes>
        </Router>
      </div>
    )

}
export default App

