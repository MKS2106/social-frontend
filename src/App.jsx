import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import RegisterPage from './pages/Register'
import SignInPage from './pages/SignIn'
import FeedPage from './pages/FeedPage'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="font-extrabold text-center text-4xl text-blue-600 mt -2 mb-2">Social Media App</h1>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/signin' element={<SignInPage />} />  
        <Route path='/feed' element={<FeedPage/>} />    
      </Routes>
    </>
  )
}

export default App
