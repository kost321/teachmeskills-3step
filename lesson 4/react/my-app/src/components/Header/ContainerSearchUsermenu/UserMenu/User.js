import "./user.css";
import Frame from "./img/Frame.svg";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();
  const IsNavigqne = () => {
    navigate("login");
  };

  return (
    <div className="block__user">
      <img className="icon" onClick={IsNavigqne} src={Frame} alt="" />
    </div>
  );
};

export default User;
