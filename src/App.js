import logo from './logo.svg';
import './App.css';
import Header from './pages/header';
import Frontpage from './pages/frontpage';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Frontpage />
    </div>
  );
}

export default App;
