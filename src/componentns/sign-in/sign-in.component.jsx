import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase.utils";
import { InputWithLabel } from "../common/input/input.component";
import { Button } from "../typography/typography.component";
import "./sign-in.style.scss";
const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setUser(user);
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
        <Button disabled={isLoading}>
          {isLoading ? <span>Verifying ...</span> : "Sign In"}
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
