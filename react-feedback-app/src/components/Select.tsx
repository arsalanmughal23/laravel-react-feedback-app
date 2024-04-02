import { TESelect } from "tw-elements-react";

export interface SelectOptionType {
    text: string,
    value: string | number,
    defaultSelected?: boolean
}

interface SelectPropsType {
    optionList: SelectOptionType[],
    label: string,
    name: string,
    isRequired?: boolean,
    customClasses?: string,
    id?: string,
}

export default function Select({
    optionList,
    label,
    name,
    isRequired,
    customClasses,
    id
}:SelectPropsType): JSX.Element {

    return (
        <TESelect data={optionList} 
            label={label} 
            name={name} 
            required={isRequired} 
            className={customClasses} 
            id={id} 
        />
    );
}