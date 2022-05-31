import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Dashboard from './components/Blog'
import RegistrationForm from './components/RegistrationForm'


const App =()=> {

  const[searchQuery,setSearchQuery]=useState('')

  const handleSearchQuery = (value) => {
    setSearchQuery(value)
  }


    return (
      <BrowserRouter>
        <div className='App'>
          <MyNavbar
            searchQuery={searchQuery}
            handleSearchQuery={handleSearchQuery}
          />
          <header className='App-header'>
            <Routes>
            <Route element={<Home/> } path="/"/>
            <Route element={<Dashboard/> } path="/dashboard"/>
            <Route element={<Login/> } path="/login"/>
            <Route element={<RegistrationForm/> } path="/registration"/>
              
              
            </Routes>
          </header>
        </div>
      </BrowserRouter>
    )
  
}

export default App
