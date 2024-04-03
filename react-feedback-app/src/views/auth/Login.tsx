import { useDispatch } from "react-redux"
import { storeToken } from "../../slicers/authSlice"
import { Link } from "react-router-dom"
import Button from "../../components/Button"
import Input from "../../components/Input"
import { themeClass } from "../../constants/constants"

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
                customClasses="mb-4"
                isRequired={true}
            ></Input>

            {/* <!--Password input--> */}
            <Input
                type="password"
                name="password"
                label="Password"
                customClasses="mb-4"
                isRequired={true}
            ></Input>

            <div className="mb-12 pt-1 text-center">
                {/* <!--Submit button--> */}
                <Button label="Login" 
                    customClasses={`${themeClass.themeBtnPrimary} mb-1`} 
                    childCustomClasses="px-6 py-2"
                    handleClick={loginAction} 
                    isFullWidth={true} 
                />

                {/* <!--Forgot password link--> */}
                <Link to="/forgot-password" className="block mb-1">
                    <Button label="Forgot password?" 
                        customClasses={themeClass.themeBtnOutlinePrimary} 
                        childCustomClasses="px-6 py-2" 
                        isFullWidth={true} 
                    />
                </Link>
            </div>

            {/* <!--Register button--> */}
            <div className="items-center md:flex md:justify-between pb-6">
                <Link to="/signup" >
                    <p className="mb-0 mr-2">Don't have an account?</p>
                </Link>

                <Link to="/signup" >
                    <Button label="Sign Up" 
                        customClasses={themeClass.themeBtnOutlinePrimary}  
                        childCustomClasses="px-6 py-2"
                    />
                </Link>
            </div>
        </form>
    )
}