import { useContext } from "react";
import { UserContext } from "../info/UserContext";

function FixturesPage(props) {
    const { user } = useContext(UserContext);

    return (
        user
            ? <div></div>
            : <p>Please log in</p>
    )
}

export default FixturesPage;