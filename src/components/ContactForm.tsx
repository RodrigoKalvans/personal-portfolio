// import axios from "axios";
// import {Formik, Field, Form, ErrorMessage} from "formik";
import {useState} from "react";
// import * as Yup from "yup";

// type FormData = {
//     name: string;
//     email: string;
//     subject: string;
//     message: string;
// };

// const initialValues = {
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
// };

// const validationSchema = Yup.object({
//     name: Yup.string().max(100).required(),
//     email: Yup.string().email().required(),
//     subject: Yup.string().max(200).required(),
//     message: Yup.string().max(10000).required(),
// });

export default function ContactForm() {
    const [buttonDisabled, setButtonDisable] = useState(false);

    // const handleSubmit = async (values: FormData) => {
    //     try {
    //         console.log("form data", values);
    //         const res = await axios.post("api/email", values);
    //         console.log(res.data);
    //     } catch (error) {
    //         console.error("Error submitting the form:", error);
    //     }
    // };

    const disableButton = () => {
        setButtonDisable(true);
        const COOLDOWN = 5000; // 5 seconds
        setTimeout(() => {
            setButtonDisable(false);
        }, COOLDOWN);
    };

    return (
        <section>
            {/* <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (values: FormData) => handleSubmit(values)}
            >
                <Form className="flex flex-col">
                    <Field
                        type="text"
                        required
                        placeholder="Name"
                        name="name"
                    />
                    <ErrorMessage name="name" />

                    <Field
                        type="text"
                        required
                        placeholder="Email"
                        name="email"
                    />
                    <ErrorMessage name="email" />

                    <Field
                        type="text"
                        required
                        placeholder="Subject"
                        name="subject"
                    />
                    <ErrorMessage name="subject" />

                    <Field
                        required
                        placeholder="Message"
                        name="message"
                        className="min-h-[100px] md:min-h-[150px]"
                        as="textarea"
                    />
                    <ErrorMessage name="message" />

                    <button
                        type="submit"
                        disabled={buttonDisabled}
                        className={`rounded-sm transition-all duration-500 ${
                            buttonDisabled ? "bg-black" : "bg-secondary"
                        }`}
                        onClick={() => disableButton()}
                    >
                        {buttonDisabled ? "..." : "Submit"}
                    </button>
                </Form>
            </Formik> */}
            <form
                action={`https://formsubmit.co/${process.env.FORMSUBMIT_KEY!}`}
                method="POST"
                className="flex flex-col"
            >
                <input type="text" required name="name" placeholder="Name" />
                <input type="email" required name="email" placeholder="Email" />
                <input
                    type="text"
                    required
                    name="subject"
                    placeholder="Subject"
                />
                <textarea
                    required
                    name="message"
                    placeholder="Message"
                    className="min-h-[100px] md:min-h-[150px]"
                />
                <button
                    type="submit"
                    disabled={buttonDisabled}
                    className={`rounded-sm transition-all duration-500 ${
                        buttonDisabled ? "bg-black" : "bg-secondary"
                    }`}
                    onClick={() => disableButton()}
                >
                    {buttonDisabled ? "..." : "Submit"}
                </button>
            </form>
        </section>
    );
}
