import { useState } from 'react'
import Quiz from './components/Quiz/Quiz'

import "./index.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
    <Quiz/>
    </div>
  
        
    
  )
}

export default App