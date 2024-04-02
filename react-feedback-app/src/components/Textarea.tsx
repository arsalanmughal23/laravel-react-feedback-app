import { TETextarea } from "tw-elements-react";

export interface TextareaPropsType {
    label: string,
    name: string,
    value?: string,
    isRequired?: boolean,
    customClasses?: string,
    id?: string,
    rows?: number
    handleChange?: Function
}

export default function Textarea({
    label = "Enter Message",
    name, value,
    isRequired = false,
    customClasses,
    id, rows = 4,
    handleChange = () => { },
}: TextareaPropsType): JSX.Element {
    return (
        <TETextarea id={id} label={label} rows={rows}
            name={name} value={value} required={isRequired} className={customClasses}
            onChange={() => handleChange()}
        ></TETextarea>
    );
}