import Logo from "../assets/images/zenika_logo.png";

const Header = () => {
  return (
    <div class="w-full h-16 flex items-center space-x-4">
      <img src={Logo} alt="Zenika Logo" class="h-full aspect-auto" />
      <a>Valeurs</a>
      <a>Offres</a>
      <a>Green IT</a>
      <a>Sécurité</a>
    </div>
  );
};

export default Header;
