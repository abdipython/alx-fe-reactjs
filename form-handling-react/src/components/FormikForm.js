import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 chars").required("Password is required"),
});

export default function FormikForm() {
  const initialValues = { username: "", email: "", password: "" };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Formik Form Submitted:", values);
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log("API Response:", data));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="space-y-4 p-4 border rounded-md w-80">
        <h2 className="text-xl font-bold">Formik Registration Form</h2>

        <div>
          <label className="block">Username</label>
          <Field name="username" type="text" className="border p-2 w-full" />
          <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
        </div>

        <div>
          <label className="block">Email</label>
          <Field name="email" type="email" className="border p-2 w-full" />
          <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
        </div>

        <div>
          <label className="block">Password</label>
          <Field name="password" type="password" className="border p-2 w-full" />
          <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
        </div>
        <div className="flex gap-8 p-8">
      <RegistrationForm />
      <FormikForm />
        </div>

        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Register
        </button>
      </Form>
    </Formik>
  );
}
