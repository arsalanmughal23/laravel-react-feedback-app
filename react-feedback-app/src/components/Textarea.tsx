import { TETextarea } from "tw-elements-react";

export interface TextareaPropsType {
    label: string,
    name: string,
    value?: string,
    isRequired?: boolean,
    customClasses?: string,
    counter?: boolean,
    maxLength?: number,    
    id?: string,
    rows?: number
    handleChange?: Function,
}

export default function Textarea({
    label = "Enter Message",
    name, value,
    isRequired = false,
    customClasses,
    counter = false,
    maxLength = 20,
    id, rows = 4,
    handleChange = () => { },
}: TextareaPropsType): JSX.Element {
    return (
        <TETextarea id={id} label={label} rows={rows} 
            counter={counter} maxLength={maxLength}
            name={name} value={value} required={isRequired} className={customClasses}
            onChange={() => handleChange()}
        ></TETextarea>
    );
}