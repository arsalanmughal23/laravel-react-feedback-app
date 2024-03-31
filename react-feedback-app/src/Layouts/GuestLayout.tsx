import { Outlet } from "react-router-dom";

export default function GuestLayout() {
    return (
        <div>
            <div>Guest Layout</div>
            <Outlet />
        </div>
    )
}