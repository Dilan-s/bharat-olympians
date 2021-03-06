import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage';
import { useMemo, useState } from 'react';
import { UserContext } from './pages/info/UserContext';
import Navbar from './pages/components/Navbar'
import FixturesPage from './pages/fixures/FixturesPage';
import LoginPage from './pages/login/LoginPage'
import ResultsPage from './pages/results/ResultsPage';
import ProfilePage from './pages/profile/ProfilePage';

function App() {

  const [user, setUser] = useState(null)

  const userMemo = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={userMemo}>
          <Navbar />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/fixtures' component={FixturesPage} />
          <Route exact path='/results' component={ResultsPage} />
          <Route exact path='/profile' component={ProfilePage} />
          <Route exact path='/login' component={LoginPage} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
