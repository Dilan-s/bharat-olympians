import "./FixturesPage.css"
import { useContext } from "react";
import { UserContext } from "../info/UserContext";

function ResultsPage(props) {
    const { user } = useContext(UserContext);

    return (
        user
            ? <div>
                <p>Fixtures Page</p>
            </div>
            : <p>Please log in</p>
    )
}

export default ResultsPage;