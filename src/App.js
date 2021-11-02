import { useState } from 'react';
import './App.css';
import RepositoryDetails from './components/RepositoryDetails';
import SelectRepository from './components/SelectRepository';

function App() {

  const [selectedRepo, setSelectedRepo] = useState({});
  const [repos, setRepos] = useState([]);

  return (
    <div className="App">
      <div className='mainbar'>GitHub Browser</div>
      <div className='main-flex-container'>
      <SelectRepository selectedRepo={selectedRepo} setSelectedRepo={setSelectedRepo} repos={repos} setRepos={setRepos}/>
      <RepositoryDetails selectedRepo={selectedRepo}/>
      </div>
    </div>
  );
}

export default App;
