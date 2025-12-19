import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar opt1="Home" opt2="Exchange Rates" opt3="About" opt4="Contact" opt5="Login" opt6="SignUP" />
    </>
  )
}

export default App
