import './Nav.css';
import { NavHashLink } from 'react-router-hash-link';

function Nav() {

  return (
      <nav className="nav">
        <NavHashLink
          to="#aim"
          className="nav__item"
          activeClassName="nav__item_active"
          active={true}
        ></NavHashLink>
        <NavHashLink
          to="#base"
          className="nav__item"
          activeClassName="nav__item_active"
        ></NavHashLink>
        <NavHashLink
          to="#gallery"
          className="nav__item"
          activeClassName="nav__item_active"
        ></NavHashLink>
      </nav>
  );
}

export default Nav;
