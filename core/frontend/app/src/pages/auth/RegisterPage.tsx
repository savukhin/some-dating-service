import { Link } from "react-router-dom";

export function RegisterPage() {
    return (
        <div>
            <input placeholder="Login"></input>
            <br/>
            <input placeholder="Email"></input>
            <br/>
            <input placeholder="Password"></input>
            <br/>
            <input placeholder="Repeat password"></input>

            <p> Already have an account? <Link to="/login">Login</Link> </p>
            <button> Send </button>
        </div>
    )
}