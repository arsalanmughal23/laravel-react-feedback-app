import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
    return (
        <div>
            <div>Default Layout</div>
            <Outlet />
        </div>
    )
}