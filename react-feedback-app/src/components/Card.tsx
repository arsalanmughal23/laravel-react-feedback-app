import Button, { ButtonPropsType } from './Button';

export interface CardPropsType {
    title: string,
    content: string,
    actionButtons: ButtonPropsType[],
    badge?: string,
    customClasses?: string
}

export default function Card({
    title,
    content,
    badge,
    actionButtons,
    customClasses
}: CardPropsType) {

    return (
        <div className={`${customClasses} block rounded-lg bg-white p-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700`}>
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                {title}
            </h5>
            { badge && <span className='theme-badge-secondary'>{ badge }</span> }
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                {content}
            </p>

            {actionButtons.map((eachAction: ButtonPropsType, key: number) => (
                <Button {...eachAction} key={`feedbackCardAction_${key.toString()}`} />
            ))}
        </div>
    )
}
