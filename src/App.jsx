import {HashRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Profile from "./Profile"
import SecondProfile from "./SecondProfile"

function App() {


  return <HashRouter>
        <Routes>
            <Route index path="/" element={<Profile/>} ></Route>
            <Route index path="/secondProfile" element={<SecondProfile/>} ></Route>
        </Routes>
    </HashRouter>
  

}

export default App
