import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import Header from "../components/Header";

export default function DefaultLayout() {

    const token = useSelector((state: RootState) => state.auth.token);

    if(!token)
        return <Navigate to="/login" />

    return (
        <div className="main defaultLayout">
            <Header />
            <Outlet />
        </div>
    )
}