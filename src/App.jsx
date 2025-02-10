import { useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)
  const add = () => {
    setCount(count + 1)
  }
  const decrease = () => {
    setCount(count - 1)
  }

  return (
    <>
       <div>
       <Navbar />
       <div className='Heading'>
          Count : {count}
          </div>
          <br />
          <div className='AddSub'>
         <button onClick={add}>Add</button>
          <button onClick={decrease}>Decrease</button>
          </div>
          </div>
         
          <Routes>
            <Route path="/" element={<Home count={count}/>} />
            <Route path="/about" element={<About count={count}/>} />
            <Route path="*" element={"Not Found"} />
          </Routes> 
    </>
  )
}

export default App
