import { TERipple } from "tw-elements-react";

interface ButtonState {
    label: string,
    className?: string,
    onClick?: Function,
    style?: {},
    isFullWidth?: boolean
    rippleColor?: string,
}

export default function Button(
    {
        label='Button', 
        className='',
        onClick=()=>{},
        style={},
        isFullWidth=false,
        rippleColor='light'
    }:ButtonState) {
 
    return (
        <TERipple rippleColor={rippleColor} className={ isFullWidth ? 'w-full' : '' } >
            <button
                className={ className.concat(" rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal") + (isFullWidth ? ' w-full' : '') }
                type="button"
                style={{ ...style, /**background: "var(--primary-gradient)"**/ }}
                onClick={()=>onClick()}
            >
                { label }
            </button>
        </TERipple>
    )
}