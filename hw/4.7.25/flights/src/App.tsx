import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Flights} from '../components/Pages/Flights/Flights'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Flights />
    </>
  )
}

export default App
