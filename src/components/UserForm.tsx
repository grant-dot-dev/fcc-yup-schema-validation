import { Formik, Form, Field, ErrorMessage } from 'formik';
import './UserForm.css';
import { validationSchema } from '../validation_schema';

import './UserForm.css';


interface UserInput {
  firstName: string;
  surname: string;
  email: string;
  dob: string;
}

export const UserForm = () => {

  const initialValues: UserInput = {
    firstName: '',
    surname: '',
    email: '',
    dob: ''
  }

  const onSubmit = (values: UserInput) => {
    alert(Object.values(values));
  };

  return (
    <div className="form-container">
      <h2>User Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isValid, dirty, isSubmitting }) => (
          <Form>
            <div className="form-control">
              <label htmlFor="firstName">First Name</label>
              <Field type="text" id="firstName" name="firstName" />
              <ErrorMessage name="firstName" component="div" className="error" />
            </div>

            <div className="form-control">
              <label htmlFor="surname">Surname</label>
              <Field type="text" id="surname" name="surname" />
              <ErrorMessage name="surname" component="div" className="error" />
            </div>

            <div className="form-control">
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-control">
              <label htmlFor="dob">Date of Birth</label>
              <Field type="date" id="dob" name="dob" />
              <ErrorMessage name="dob" component="div" className="error" />
            </div>

            <button disabled={!(isValid && dirty) || isSubmitting} type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

