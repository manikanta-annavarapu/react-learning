import useAuth from "../hooks/useAuth";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is Required"),
  password: Yup.string()
    .required("Password is Required")
    .min(6, "Password must bet at least 6 characters"),
});

export default function Login() {
  const { login } = useAuth();
  return (
    <Formik
      validationSchema={LoginSchema}
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => login(values.email, values.password)}
    >
      <Form>
        <Field name="email" type="email" placeholder="Enter email" />
        <ErrorMessage name="email" />

        <Field name="password" type="password" placeholder="Enter password" />
        <ErrorMessage name="password" />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
}
