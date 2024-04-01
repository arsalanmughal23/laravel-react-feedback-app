import { TEInput } from "tw-elements-react";

interface InputState {
    name: string,
    label: string,
    type?: string,
    className?: string,
}

export default function Input(
    {
        name,
        label,
        type='text',
        className=''
    }:InputState) {
 
    return (
        <TEInput
            name={name}
            label={label}
            type={type}
            className={className}
        ></TEInput>
    )
}