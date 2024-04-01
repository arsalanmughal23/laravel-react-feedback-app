import { useDispatch } from "react-redux"
import { storeToken } from "../../slicers/authSlice"
import { TEInput } from "tw-elements-react"
import { Link } from "react-router-dom"
import Button from "../../components/Button"
import Input from "../../components/Input"

export default function Login() {

    const dispatch = useDispatch()

    const loginAction = () => {
        dispatch(storeToken('123'))
    }

    return (
        <form>
            <p className="mb-4">Please login to your account</p>
            {/* <!--Email input--> */}
            <Input
                type="text"
                name="email"
                label="Email"
                className="mb-4"
            ></Input>

            {/* <!--Password input--> */}
            <Input
                type="password"
                name="password"
                label="Password"
                className="mb-4"
            ></Input>

            {/* <!--Submit button--> */}
            <div className="mb-12 pb-1 pt-1 text-center">
                <Button label="Login" className="theme-btn-primary" onClick={loginAction} isFullWidth={true} />
                {/* <!--Forgot password link--> */}
                <a href="#!">Forgot password?</a>
            </div>

            {/* <!--Register button--> */}
            <div className="items-center md:flex md:justify-between pb-6">
                <Link to="/signup" >
                    <p className="mb-0 mr-2">Don't have an account?</p>
                </Link>

                <Link to="/signup" >
                    <Button label="Sign Up" className="theme-btn-outline-primary" />
                </Link>
            </div>
        </form>
    )
}