import "./ProfilePage.css"
import { useContext } from "react";
import { UserContext } from "../info/UserContext";

function ProfilePage(props) {
    const { user } = useContext(UserContext);

    return (
        user
            ? <div>
                <p>Profile Page</p>
            </div>
            : <p>Please log in</p>
    )
}

export default ProfilePage;