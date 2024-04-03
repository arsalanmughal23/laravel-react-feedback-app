import constants, { themeClass } from "../constants/constants";

export default function Footer() {
    return (
        <footer className={`bg-gray-50 border-t fixed w-full bottom-0 text-center lg:text-left`}>

            {/** Copyright section */}
            <div className="p-6 text-center">
                <span>© 2023 Copyright:</span>
                <a className={`${themeClass.themeTextSecondary} font-semibold text-neutral-600 dark:text-neutral-400 ml-1`} href={constants.appUrl}>
                    Feedback-App
                </a>
            </div>
        </footer>
    )
}
