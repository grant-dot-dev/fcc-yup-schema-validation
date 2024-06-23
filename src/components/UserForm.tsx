import { Formik, Form, Field, ErrorMessage } from 'formik';
import './UserForm.css';


import './UserForm.css';
import { UserInput } from '../types';
import { userFormSchema } from '../validation_schema';


export const UserForm = () => {

  const initialValues: UserInput = {
    firstname: '',
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
        validationSchema={userFormSchema}
        onSubmit={(values, { setSubmitting }) => {
          // used in local development to simulate async API call
          setTimeout(() => {
            setSubmitting(false);
          }, 300);
        }}
      >
        {({ isValid, isSubmitting }) => (
          <Form>
            <div className="form-control">
              <label htmlFor="firstname">First Name</label>
              <Field type="text" id="firstName" name="firstname" />
              <ErrorMessage name="firstname" component="div" className="error" />
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

            <button type="submit" disabled={isSubmitting || !isValid}>Submit</button>
          </Form>
        )}
      </Formik>
    </div >
  );
};

