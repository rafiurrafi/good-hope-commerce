import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";
import { InputWithLabel } from "../common/input/input.component";
import { Button } from "../typography/typography.component";
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
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
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
      setIsLoading(false);
      navigate("/");
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
          required={true}
        />
        <InputWithLabel
          onChange={handleChange}
          name="email"
          value={email}
          label="Email"
          placeholder="modon@lal.com"
          required={true}
        />
        <InputWithLabel
          onChange={handleChange}
          name="password"
          value={password}
          label="Password"
          placeholder="xxxxxxxx"
          type="text"
          required={true}
        />
        <InputWithLabel
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          label="Re-enter Password"
          placeholder="xxxxxxxx"
          type="text"
          required={true}
        />
        <Button disabled={isLoading}>
          {isLoading ? <span>Verifying ...</span> : "Sign Up"}
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
