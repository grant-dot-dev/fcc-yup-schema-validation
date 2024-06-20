import * as Yup from 'yup';

export const validationSchema = Yup.object({
  firstname: Yup.string().required('First name is required'),

  surname: Yup.string().required('Surname is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  dob: Yup.date().required('Date of Birth is required')
});