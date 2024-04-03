import { NavLink } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { themeClass } from "../../constants/constants";

export default function Signup() {

    const signupAction = () => {}

    return (
        <form>
            <p className="mb-4">Please sign up your account</p>

            {/* <!--Name input--> */}
            <Input
                type="text"
                name="name"
                label="Name"
                customClasses="mb-4"
                isRequired={true}
            ></Input>
            
            {/* <!--Email input--> */}
            <Input
                type="email"
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
            
            {/* <!--Confirm-Password input--> */}
            <Input
                type="password"
                name="password_confirmation"
                label="Confirm Password"
                customClasses="mb-4"
                isRequired={true}
            ></Input>

            {/* <!--Submit button--> */}
            <div className="mb-12 pb-1 pt-1 text-center">
                <Button label="Sign Up" 
                    customClasses={themeClass.themeBtnPrimary} handleClick={signupAction} isFullWidth={true}  
                    childCustomClasses="px-6 py-2"
                />
            </div>

            {/* <!--Register button--> */}
            <div className="items-center md:flex md:justify-between pb-6">
                <NavLink to="/login" >
                    <p className="mb-0 mr-2">Already have an account?</p>
                </NavLink>

                <NavLink to="/login" >
                    <Button label="Login" 
                        customClasses={themeClass.themeBtnOutlinePrimary}  
                        childCustomClasses="px-6 py-2"
                    />
                </NavLink>
            </div>
        </form>
    )
}