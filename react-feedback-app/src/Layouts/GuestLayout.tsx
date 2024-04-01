import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../store";
import Header from "../components/guest/Header";

export default function GuestLayout() {

    const token = useSelector((state: RootState) => state.auth.token);

    if (token)
        return <Navigate to="/" />

    return (
        <div className="main guestLayout">
            <Header />

            <section className="flex justify-center h-full">
                <div className="container h-full md:p-10">
                    <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                        <div className="w-full">
                            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                                <div className="g-0 lg:flex lg:flex-wrap md:flex">
                                    {/* <!-- Left column container--> */}
                                    <div className="px-4 md:px-0 lg:w-6/12">
                                        <div className="md:mx-6 md:p-12">
                                            {/* <!--Logo--> */}
                                            <div className="text-center">
                                                <img
                                                    className="mx-auto w-48"
                                                    src="http://127.0.0.1:8001/src/assets/logo.png"
                                                    alt="logo"
                                                />
                                                <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                                                    We provide solutions publically
                                                </h4>
                                            </div>

                                            <Outlet />
                                        </div>
                                    </div>


                                    {/* <!-- Right column container with background and description--> */}
                                    <div
                                        className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                                        style={{
                                            background: "var(--secondary-gradient)",
                                        }}
                                    >
                                        <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                                            <h4 className="mb-6 text-4xl font-semibold">
                                                Share your feedback with us
                                            </h4>
                                            <p className="text-xl">
                                                We value your feedbacks & we are research about your feedback and make best solution for you.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}