import { useState } from 'react';
import Button from '../components/Button'
import { themeClass } from '../constants/constants'
import ModalBox from '../components/ModalBox';
import FeedbackFormFields from './feedback/FormFields';

export default function Home() {

    const [showFeedbackModal, setShowFeedbackModal] = useState(false);

    return (
        <>
            <ModalBox title="Submit Feedback" restrictBackDrop={true} isCenter={true}
                showModal={showFeedbackModal} setShowModal={setShowFeedbackModal}>
                <FeedbackFormFields />
            </ModalBox>

            <div className={`${themeClass.themeBgGradientPrimary} relative flex items-center justify-center py-16 bg-gray-50 mb-16`}>
                <div className=" absolute dark:from-neutral-700 dark:to-neutral-800"
                    aria-hidden="true">
                </div>
                <div className="relative px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto text-lg text-center max-w-4xl">
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                            <span className="block mb-6">Submit Your <span className={themeClass.themeTextHighlightSecondary}>Feedback</span></span>
                        </h1>
                        <p className="text-3xl text-teal-50 max-w-3xl">You'll get your Solution here</p>

                        <Button
                            label="Place Feedback"
                            customClasses={`${themeClass.themeBtnSecondary} mt-6`}
                            childCustomClasses={'text-base'}
                            isFullWidth={false}
                            handleClick={() => setShowFeedbackModal(true)}
                        />

                    </div>
                </div>
            </div>

            {/**  Grid  */}
            <div className="container mx-auto mb-16">
            </div>
        </>
    )
}
