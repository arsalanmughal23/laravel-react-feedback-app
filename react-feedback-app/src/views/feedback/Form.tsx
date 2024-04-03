import FieldGroup from "../../components/FieldGroup";
import Input from "../../components/Input";
import ModalBox from "../../components/ModalBox";
import Select, { SelectOptionType } from "../../components/Select";
import Textarea from "../../components/Textarea";

interface FeedbackFormPropsType {
    showForm: boolean,
    setShowForm: Function
}
export default function FeedbackForm({
    showForm = false,
    setShowForm = () => {}
}:FeedbackFormPropsType) {

    const categorySelectOptions:SelectOptionType[] = [
        { text: "Bug report", value: 1 },
        { text: "Feature", value: 2, defaultSelected: true },
        { text: "Request", value: 3 },
        { text: "Improvement", value: 4 },
        { text: "Bug fix", value: 5 },
    ];

    const handleAction = () => {
        console.log('Submited');
        // setShowForm(false);
    }

    return (
        <>
            <ModalBox title="Submit Feedback" restrictBackDrop={true} isCenter={true} theme='secondary'
                showModal={showForm} setShowModal={setShowForm}
                handleAction={handleAction}>

                <form action="/" id="feedbackForm">
                    {/* Title Field Group */}
                    <FieldGroup errors={['Title is required']} customClasses="mb-4">
                        {/* Title Input */ }
                        <Input
                            type="title"
                            name="title"
                            label="Title"
                            isRequired={true}
                        />
                    </FieldGroup>

                    {/* Category Field Group */}
                    <FieldGroup errors={['Category is required']} customClasses="mb-4">
                        {/* Category Select */}
                        <Select optionList={categorySelectOptions} 
                            label="Category"
                            name="category"
                            id="category"
                            isRequired={true}
                            search={true}
                        />
                    </FieldGroup>

                    {/* Description Field Group */}
                    <FieldGroup errors={['Description is required']}>
                        {/* Description Textarea */}
                        <Textarea
                            label="Description"
                            name="description"
                            isRequired={true}
                            rows={4}
                            counter={true}
                            maxLength={50}
                        />
                    </FieldGroup>
                </form>

            </ModalBox>
        </>
    )
}
