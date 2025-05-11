import css from './ContactForm.module.css'
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

export default function ContactForm() {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.items);

    const nameFieldId = nanoid();
    const numberFieldId = nanoid();
    
    const initialValues = {
        name: '',
        number: '',
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Name must be at least 3 characters')
            .max(50, 'Name must be less than 50 characters')
            .required('Name is required'),
        number: Yup.string()
            .matches(/^\+?\d{10,}$/, 'Phone number must be at least 10 digits')
            .required('Phone number is required'),
    });

    const handleSubmit = (values, actions) => {
        const isExist = contacts.some(
            contact => contact.name.toLowerCase() === values.name.toLowerCase()
        );
        
        if (isExist) {
            alert(`Contact ${values.name} already exists!`);
            return;
        }

        dispatch(addContact({
            id: nanoid(),
            name: values.name,
            number: values.number,
        }));
        
        actions.resetForm();
    };

    return (
        <div className={css.formWrapper}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className={css.form}>
                    <div className={css.inputsContainer}>
                        <label className={css.formLabel} htmlFor={nameFieldId}>
                            Name
                        </label>
                        <Field 
                            className={css.input} 
                            type="text" 
                            name="name" 
                            id={nameFieldId}
                            placeholder="Enter name" 
                        />
                        <ErrorMessage className={css.message} name="name" component="span" />
                    </div>

                    <div className={css.inputsWrapper}>
                        <label className={css.formLabel} htmlFor={numberFieldId}>
                            Number
                        </label>
                        <Field
                            className={css.input}
                            type="tel"
                            name="number"
                            id={numberFieldId}
                            placeholder="Enter phone number"
                        />
                        <ErrorMessage className={css.message} name="number" component="span" />
                    </div>

                    <button className={css.btn} type="submit">
                        Add contact
                    </button>
                </Form>
            </Formik>
        </div>
    );
}