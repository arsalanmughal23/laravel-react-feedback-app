import { ReactElement } from "react";
import {
    TEModal,
    TEModalDialog,
    TEModalContent,
    TEModalHeader,
    TEModalBody,
    TEModalFooter,
} from "tw-elements-react";
import { themeClass } from "../constants/constants";
import Button from "./Button";

interface ModalBox {
    showModal: boolean,
    setShowModal: Function,
    title: string,
    children: ReactElement,
    isCenter?: boolean,
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right',
    size?: 'sm' | 'lg' | 'xl' | 'fullscreen',
    restrictBackDrop?: boolean
}

export default function ModalBox({
    showModal = false,
    setShowModal,
    title,
    isCenter = false,
    position = 'top-right',
    size = 'lg',
    restrictBackDrop = false,
    children
}: ModalBox) {

    return (
        <>
            {/* Modal */}
            <TEModal show={showModal} setShow={setShowModal} staticBackdrop={restrictBackDrop} className={`${isCenter && 'flex items-center'}`}>
                <TEModalDialog position={position} className={`${isCenter && 'left-0'} p-5`} size={size}
                    theme={{
                        show: "translate-x-0 opacity-100",
                        hidden: "translate-x-[100%] opacity-0",
                    }}
                >
                    <TEModalContent>

                        <form action="#">
                            <TEModalHeader>
                                {/* Modal Header Content */}
                                <h5 className={`${themeClass.themeColorSecondary} text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200`}>
                                    {title}
                                </h5>

                                {/* Close button */}
                                <button type="button" onClick={() => setShowModal(false)} aria-label="Close"
                                    className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                >
                                    {/* Cross Icon Svg */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </TEModalHeader>

                            <TEModalBody>
                                {/* Modal Body Content */}
                                {children}
                            </TEModalBody>

                            <TEModalFooter>
                                {/* Modal Footer Content */}
                                <Button
                                    label="Close" isFullWidth={false} handleClick={() => setShowModal(false)}
                                    customClasses={`${themeClass.themeBgGradientSecondary} text-white`}
                                />
                                <Button label="Submit" buttonType="submit" isFullWidth={false}
                                    customClasses={`${themeClass.themeBgGradientPrimary} ml-1 text-white`}
                                />
                            </TEModalFooter>
                        </form>

                    </TEModalContent>
                </TEModalDialog>
            </TEModal>
        </>
    );
}