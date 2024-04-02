import { ReactElement } from "react";
import {
    TEModal,
    TEModalDialog,
    TEModalContent,
    TEModalHeader,
    TEModalBody,
    TEModalFooter,
} from "tw-elements-react";
import Button from "./Button";
import { themeClass } from "../constants/constants";

interface ModalBox {
    showModal: boolean,
    setShowModal: Function,
    title: string,
    children: ReactElement
}

export default function ModalBox({ showModal=false, setShowModal, title='Modal Title', children }: ModalBox) {

    return (
        <>
            {/* <!-- Modal --> */}
            <TEModal show={showModal} setShow={setShowModal} staticBackdrop>
                <TEModalDialog>
                    <TEModalContent>

                        <TEModalHeader>
                            {/* <!--Modal title--> */}
                            <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                                { title }
                            </h5>

                            {/* <!--Close button--> */}
                            <button type="button" onClick={() => setShowModal(false)} aria-label="Close"
                                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                            >
                                {/* <!--Cross Icon Svg--> */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </TEModalHeader>

                        <TEModalBody>
                            {children}
                        </TEModalBody>

                        <TEModalFooter>
                            <Button
                                label="Close"
                                customClasses={`${themeClass.themeBgGradientSecondary} mt-6 text-white`}
                                isFullWidth={false}
                                handleClick={() => setShowModal(false)}
                            />
                            <Button
                                label="Submit"
                                customClasses={`${themeClass.themeBgGradientPrimary} ml-1 mt-6 text-white`}
                                isFullWidth={false}
                                handleClick={() => setShowModal(false)}
                            />
                        </TEModalFooter>

                    </TEModalContent>
                </TEModalDialog>
            </TEModal>
        </>
    );
}