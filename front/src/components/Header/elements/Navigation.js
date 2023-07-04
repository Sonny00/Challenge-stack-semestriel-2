import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import Anchor from "../../anchor";

const Navigation = () => {
  return (
    <nav className="header-content__navigation space-pr--15 space-pl--15 d-none d-lg-block">
      <ul>
        <li>
          <Anchor path="/">Accueil</Anchor>
        </li>
        <li>
          <Anchor path="/">Mon Panier</Anchor>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
