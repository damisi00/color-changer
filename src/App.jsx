import { useState } from 'react'
import NavBar from './components/Navbar.jsx'
import Section from './components/Section.jsx'


function App() {
  const [type, setType] = useState("simple-color")
  const handleType = (type) => {
    setType(type);
  }

  return (
    <>
      <NavBar handleType={handleType} />
      <Section type={type} />
    </>
  )
}

export default App
