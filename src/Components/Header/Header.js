import Logo from "../../assets/images/zenika_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="w-full h-16 flex items-center space-x-4">
      <Link to="/">
        <img src={Logo} alt="Zenika Logo" class="h-full aspect-auto w-[90px]" />
      </Link>
      <Link href="/">Valeurs</Link>
      <Link href="/">Offres</Link>
      <Link href="/">Green IT</Link>
      <Link href="/">Sécurité</Link>
    </div>
  );
};

export default Header;
