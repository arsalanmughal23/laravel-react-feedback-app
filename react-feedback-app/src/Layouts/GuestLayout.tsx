import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../store";
import Header from "../components/guest/Header";

export default function GuestLayout() {
    
    const token = useSelector((state: RootState) => state.auth.token);

    if(token)
        return <Navigate to="/" />

    return (
        <div className="main">
            <Header />
            <Outlet />
        </div>
    )
}