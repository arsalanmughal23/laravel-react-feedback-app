import { useDispatch, useSelector } from "react-redux"
import { storeToken } from "../../slicers/authSlice"

export default function Login() {

    const dispatch = useDispatch()

    const loginAction = () => {
        dispatch(storeToken('123'))
    }

    return (
        <div>
            <button onClick={loginAction}>Login</button>
        </div>
    )
}