import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={HomePage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
