import './HomePage.css'
import logo from '../../images/logo.svg'

function HomePage(props) {
    return (
        <header className="Home-header">
            <img src={logo} className="Home-logo" alt="logo" />
            <p>
                Bharat Olympians CC
            </p>
            <a
                className="Home-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    );
}

export default HomePage;