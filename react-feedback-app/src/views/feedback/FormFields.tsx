import Input from "../../components/Input";
import Select, { SelectOptionType } from "../../components/Select";
import Textarea from "../../components/Textarea";

export default function FeedbackFormFields() {

    const categorySelectOptions:SelectOptionType[] = [
        { text: "Bug report", value: 1 },
        { text: "Feature", value: 2, defaultSelected: true },
        { text: "Request", value: 3 },
        { text: "Improvement", value: 4 },
        { text: "Bug fix", value: 5 },
    ];

    return (
        <>
            {/* Title input */}
            <Input
                type="title"
                name="title"
                label="Title"
                customClasses="mb-4"
                isRequired={true}
            ></Input>

            {/* Category Select */}
            <Select optionList={categorySelectOptions} 
                label="Category"
                name="category"
                customClasses="mb-4"
                isRequired={true}
            />

            {/* Description Textarea */}
            <Textarea
                label="Description"
                name="description"
                isRequired={true}
                rows={4}
            />
        </>
    )
}
