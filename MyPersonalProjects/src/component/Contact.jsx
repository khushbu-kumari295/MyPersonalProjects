
import { PrimaryButton, Stack, TextField } from '@fluentui/react';
import emailjs from 'emailjs-com';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import '../CSS/nav.css';


export const Contacts = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            subject: '',
            description: ''
        },
        validationSchema: Yup.object().shape({
            email: Yup.string()
                .email('Invalid Email')
                .required("Required"),
            name: Yup.string()
                .required('Required'),
            phone: Yup.string()
                .matches(phoneRegExp, 'Phone number is not valid')
                .required('Required'),
            subject: Yup.string()
                .required('Required'),
            description: Yup.string()
                .required('Required')
        }),
        onSubmit: values => {
            sendEmail(serviceID,
                TEMPLATE_ID,
                {
                    name: values.name,
                    phone: values.phone,
                    email: values.email,
                    subjects: values.subjects,
                    description: values.description
                },
                USER_ID
            );
            formik.resetForm();
        }
    })

    const serviceID = "service_kishmish295";
    const TEMPLATE_ID = "template_ID"
    const USER_ID = "user_Npu3Q3OM9Q0LLD2GE3cTY";

    const sendEmail = (serviceID, TEMPLATE_ID, variables, USER_ID) => {

        emailjs.send(serviceID, TEMPLATE_ID, variables, USER_ID)
            .then(() => {
                setSuccessMessage("Thankyou for providing details. I will contact you shortly!");
            }).catch(err => console.error(`something went wrong ${err}`));

    }


    return (
        <div className='contacts contact-form' id="contact-me">
            <div className='text-center'>
                <h1>contact me</h1>
                <span className="success-message">{successMessage}</span>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <Stack horizontal tokens={{ childrenGap: 40 }} styles={{ root: { width: '90%', margin: '0 auto' } }} >
                    <Stack
                        tokens={{ childrenGap: 15 }} styles={{ root: { width: '50%' } }} >
                        <TextField
                            label="Name"
                            name="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            errorMessage={formik.touched.name && formik.errors?.name}
                        />
                        <TextField
                            label="Phone Number"
                            name='phone'
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                            errorMessage={formik.touched.phone && formik.errors?.phone} />
                        <TextField label="Email" name='email'
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            errorMessage={formik.touched.email && formik.errors?.email} />
                        <TextField label="Subject"
                            name='subject'
                            onChange={formik.handleChange}
                            value={formik.values.subject}
                            errorMessage={formik.touched.subject && formik.errors?.subject}
                        />
                    </Stack>
                    <Stack tokens={{ childrenGap: 20 }} styles={{ root: { width: '50%' } }} >
                        <TextField multiline rows={15} label="Description"
                            name="description"
                            onChange={formik.handleChange}
                            value={formik.values.description}
                            errorMessage={formik.touched.description && formik.errors?.description}
                        />

                    </Stack>
                </Stack>
                <Stack>
                    <PrimaryButton text="Contact me" type="Submit"
                        style={{ margin: '3rem auto' }}
                    />
                </Stack>
            </form>
        </div>
    )



}