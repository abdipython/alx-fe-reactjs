import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";


export default function App() {
  return (
    <div className="flex gap-8 p-8">
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}
