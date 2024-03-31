import { Link, Navigate } from "react-router-dom";
import { storeToken } from "../slicers/authSlice";
import { useDispatch } from "react-redux";

export default function Header() {
    
    const dispatch = useDispatch()

    const logoutAction = () => {
        dispatch(storeToken(null))
        return <Navigate to="/login" />
    }

    return (
        <header>
            <Link to="/profile">Profile</Link>
            <Link to="/feedback">Feedbacks</Link>
            <button onClick={logoutAction}>Logout</button>
        </header>
    )
}