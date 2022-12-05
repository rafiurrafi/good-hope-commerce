import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";
import Container from "../common/Container/container.component";
import { InputWithLabel } from "../common/input/input.component";
import { ButtonLink } from "../typography/typography.component";
import "./sign-up.style.scss";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up">
      <form onSubmit={handleSubmit}>
        <InputWithLabel
          onChange={handleChange}
          name="displayName"
          value={displayName}
          label="Display Name"
          placeholder="Modon"
        />
        <InputWithLabel
          onChange={handleChange}
          name="email"
          value={email}
          label="Email"
          placeholder="modon@lal.com"
        />
        <InputWithLabel
          onChange={handleChange}
          name="password"
          value={password}
          label="Password"
          placeholder="xxxxxxxx"
          type="text"
        />
        <InputWithLabel
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          label="Re-enter Password"
          placeholder="xxxxxxxx"
          type="text"
        />
        <ButtonLink>Sign Up</ButtonLink>
      </form>
    </div>
  );
};

export default SignUp;
