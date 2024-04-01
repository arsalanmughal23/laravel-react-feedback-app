import { TERipple } from "tw-elements-react";

interface ButtonState {
    label: string,
    customClasses?: string,
    handleClick?: ()=>void,
    style?: {},
    isFullWidth?: boolean
    rippleColor?: string,
}

export default function Button(
    {
        label='Button', 
        customClasses='',
        handleClick,
        style={},
        isFullWidth=false,
        rippleColor='light'
    }:ButtonState) {
 
    return (
        <TERipple rippleColor={rippleColor} className={ customClasses.concat(" rounded px-6 pb-2 pt-2.5 text-xs font-medium leading-normal") + (isFullWidth ? ' w-full' : '') } >
            <button
                className={ 'uppercase' + (isFullWidth ? ' w-full' : '') }
                type="button"
                style={{ ...style, /**background: "var(--primary-gradient)"**/ }}
                onClick={handleClick}
            >
                { label }
            </button>
        </TERipple>
    )
}