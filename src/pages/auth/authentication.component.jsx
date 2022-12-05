import { useParams } from "react-router-dom";
import SignUp from "../../componentns/sign-up/sign-up.component";
import Title from "../../componentns/title/title.component";
import "./authentication.style.scss";
const Authentication = () => {
  const { status } = useParams();
  return (
    <div className="auth">
      <h2 className="auth__title">
        {status === "login" ? "Log in" : "Sign Up"}
      </h2>
      <div className="auth__content">
        <SignUp />
      </div>
    </div>
  );
};

export default Authentication;
