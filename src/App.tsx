import { useState } from 'react'
import './App.css'
// import Header from '@/components/header/header.component'
import Header from '@/components/header/header.component'



function App() {
  const [count, setCount] = useState(0)

  return (
    <Header/>
  )
}

export default App
