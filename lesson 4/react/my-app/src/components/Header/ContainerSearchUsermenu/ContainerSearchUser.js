import Search from "./Search/Search.js";
import User from "./UserMenu/User";
import "./containerSearchUser.css";

const ContainerSearchUser = () => {
  return (
    <div className="container__user">
      <Search />
      <User/>
    </div>
  );
};

export default ContainerSearchUser;
