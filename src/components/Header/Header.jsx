import logo from "../../images/header_logo.svg";
import line from "../../images/header_line.svg";

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Around The U.S. logo" />
      <img className="header__line" src={line} alt="Division line" />
    </header>
  );
};

export default Header;
