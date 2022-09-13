import { Link } from "react-router-dom";

export function LoginPage() {
    return (
        <div>
            <input placeholder="Login"></input>
            <br/>
            <input placeholder="Password"></input>

            <p> Don't have an account? <Link to="/register">Register</Link> </p>
            <button> Send </button>
        </div>
    )
}