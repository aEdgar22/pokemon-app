import { useState } from "react";

interface LoginForm {
  email: string;
  password: string;
}

const useForm = (initialState = {email: "", password: ""}) => {
  const [values, setValues] = useState<LoginForm>(initialState);
  console.log(values)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

 /*  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    callback();
  }; */

  return {
    handleChange,
    values,
  };
};

export default useForm;
