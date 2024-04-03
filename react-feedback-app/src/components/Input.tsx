import { TEInput } from "tw-elements-react";

interface InputState {
    name: string,
    label: string,
    type?: string,
    
    customClasses?: string,
    value?: string,
    id?: string,
    isRequired?: boolean,
    handleChange?: Function
}

const fixedInputClasses = '';

export default function Input(
    {
        name,
        label,
        type='text',
        customClasses,
        value,
        id,
        isRequired=false,
        handleChange=()=>{},
    }:InputState) {
 
    return (
        <TEInput
            name={name}
            label={label}
            type={type}
            className={`${customClasses} ${fixedInputClasses}`}
            onChange={()=>handleChange()}
            value={value}
            id={id}
            required={isRequired}
        />
    )
}