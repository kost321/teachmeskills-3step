import { Burger, ContainerSearchUser } from "./index";

import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <Burger />
      <ContainerSearchUser />
    </div>
  );
};

export default Header;
