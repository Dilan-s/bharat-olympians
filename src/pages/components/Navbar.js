import { useHistory } from 'react-router-dom'
import './NavBar.css'


function NavBar() {

    const history = useHistory();

    return (
        <div className="NavBar">
            <button className="NavBarButton" onClick={() => history.push('')}>Home Page</button>
            <button className="NavBarButton" onClick={() => history.push('fixtures')}>Fixtures</button>
            <button className="NavBarButton" onClick={() => history.push('results')}>Results</button>
        </div>
    )
}

export default NavBar;
