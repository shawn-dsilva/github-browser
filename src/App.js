import { useState } from 'react';
import './App.css';
import RepositoryDetails from './components/RepositoryDetails';
import SelectRepository from './components/SelectRepository';

function App() {

  const [selectedRepo, setSelectedRepo] = useState({});
  return (
    <div className="App">
      <div className='mainbar'>GitHub Browser</div>
      <div className='main-flex-container'>
      <SelectRepository setSelectedRepo={setSelectedRepo}/>
      <RepositoryDetails selectedRepo={selectedRepo}/>
      </div>
    </div>
  );
}

export default App;
