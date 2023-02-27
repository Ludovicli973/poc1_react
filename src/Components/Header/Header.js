import Logo from "../../assets/images/zenika_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="w-full h-16 flex items-center space-x-4">
      <Link to="/Home">
        <img src={Logo} alt="Zenika Logo" class="h-full aspect-auto w-[90px]" />
      </Link>
      <a>Valeurs</a>
      <a>Offres</a>
      <a>Green IT</a>
      <a>Sécurité</a>
    </div>
  );
};

export default Header;
