import { useContext } from 'react';
import { useHistory } from 'react-router-dom'
import { UserContext } from '../info/UserContext';
import './NavBar.css'


function NavBar() {
    const { user, setUser } = useContext(UserContext);
    const history = useHistory();

    return (
        <div className="NavBar">
            <button className="NavBarButton" onClick={() => history.push('')}>Home Page</button>
            <button className="NavBarButton" onClick={() => history.push('fixtures')}>Fixtures</button>
            <button className="NavBarButton" onClick={() => history.push('results')}>Results</button>
            {
                user 
                ? <button className="NavBarButton" onClick={() => setUser(null)}>Log Out</button>
                : <button className="NavBarButton" onClick={() => history.push('login')}>Log In</button>
            }
            {
                user
                ? <button className="NavBarButton" onClick={() => history.push('profile')}>Profile</button>
                : <div />
            }
        </div>
    )
}

export default NavBar;
