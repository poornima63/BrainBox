import { useState } from 'react'
import Header from './Components/Header'
import AddResourceForm from './Components/AddResourcesForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    
        <div className="min-h-screen bg-gray-100">
      <Header />
      <AddResourceForm />
    </div>
    
  )
}

export default App
