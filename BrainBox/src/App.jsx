import Header from './Components/Header';
import AddResourceForm from './Components/AddResourcesForm';
import ResourceList from './Components/ResourceList';
import { useState, useEffect} from 'react';

function App() {
   const [resources, setResources] = useState([]);
    // 🔃 Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("resources");
    if (saved) {
      setResources(JSON.parse(saved));
    }
  }, []);

  // 💾 Save to localStorage when resources change
  useEffect(() => {
    localStorage.setItem("resources", JSON.stringify(resources));
  }, [resources]);

  const handleAddResource = (resource) => {
    setResources([...resources, resource]);
  }
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
       <AddResourceForm onAdd={handleAddResource} />
        <ResourceList resources={resources} />
    </div>
  );
}

export default App;
