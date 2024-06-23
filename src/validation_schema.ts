import * as Yup from 'yup';
import { UserInput } from './types';

// TS Schema, typed to Interface
const createYupSchema = <T extends object>(schema: Yup.ObjectSchema<T>): Yup.ObjectSchema<T> => schema;



export const userFormSchema = createYupSchema<UserInput>(
  Yup.object().shape({
    firstname: Yup.string().required('First name is required'),
    surname: Yup.string().required('Surname is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    dob: Yup.string().required('Date of Birth is required'),
  })
);

// JS Equivalent:
export const jsValidationSchema =
  Yup.object().shape({
    firstname: Yup.string().required('First name is required'),
    surname: Yup.string().required('Surname is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    dob: Yup.string().required('Date of Birth is required'),
  });
