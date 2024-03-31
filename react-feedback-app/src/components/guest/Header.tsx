import { Link } from "react-router-dom";

export default function Header() {

    return (
        <header>
            <Link to="/login" >Login</Link>
            <Link to="/signup" >Sign Up</Link>
        </header>
    )
}