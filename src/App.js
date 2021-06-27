import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage';
import { useMemo, useState } from 'react';
import { UserContext } from './pages/info/UserContext';
import Navbar from './pages/components/Navbar'


function App() {

  const [user, setUser] = useState(null)

  const userMemo = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={userMemo}>
          <Navbar />
          <Route exact path='/' component={HomePage} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
