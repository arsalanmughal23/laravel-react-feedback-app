import { NavLink } from "react-router-dom";
import { storeToken } from "../slicers/authSlice";
import { useDispatch } from "react-redux";

export default function Header() {
    
    const dispatch = useDispatch();

    const logoutAction = () => {
        dispatch(storeToken(null));
    }

    return (
        <header>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/feedback">Feedbacks</NavLink>
            <button onClick={logoutAction}>Logout</button>
        </header>
    )
}