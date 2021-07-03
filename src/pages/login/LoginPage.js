import { useContext, useState } from "react";
import { UserContext } from "../info/UserContext";

function LoginPage(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const {user, setUser} = useContext(UserContext)

    const handleEmailInput = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordInput = (event) => {
        setPassword(event.target.value)
    }

    const handleLoginSubmit = () => {
        console.log(email, password)
        setUser({email: email, password: password})
    }

    return (
        <div className="LoginPage">
            <p>Login Page</p>
            <input onChange={handleEmailInput} value={email} type="text" placeholder="Email"/>
            <input onChange={handlePasswordInput} value={password} type="password" placeholder="Password"/>
            <button onClick={handleLoginSubmit} >Submit</button>
            {
                user
                ? <p>Welcome {user.email}</p>
                : <p>Please login</p>
            }
        </div>
    )
}

export default LoginPage;