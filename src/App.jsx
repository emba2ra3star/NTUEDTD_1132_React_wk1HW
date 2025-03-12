import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/normalize.css'
import './css/style_global.css'
import './index.css'
import './App.css'

import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Home />
  )
}

export default App
