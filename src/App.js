import './App.css';
import RepositoryDetails from './components/RepositoryDetails';
import SelectRepository from './components/SelectRepository';

function App() {
  return (
    <div className="App">
      <div className='mainbar'>GitHub Browser</div>
      <div className='main-flex-container'>
      <SelectRepository/>
      <RepositoryDetails/>
      </div>
    </div>
  );
}

export default App;
