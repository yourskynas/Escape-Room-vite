import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import { AppRoute } from '../../constants';

type HeaderProps = {
  authorizationStatus?: boolean;
}

const ExitButton = (): JSX.Element => (
  <Link className="btn btn--accent header__side-item" to={AppRoute.Login}>Выйти</Link>
);

const EntryButton = (): JSX.Element => (
  <Link className="btn header__side-item header__login-btn" to={AppRoute.Login}>Вход</Link>
);

const BookingButton = (): JSX.Element => (
  <li className="main-nav__item">
    <Link className="link" to={AppRoute.MyQuests}>Мои бронирования</Link>
  </li>
);

const Header = ({authorizationStatus}: HeaderProps): JSX.Element => (
  <header className="header">
    <div className="container container--size-l">
      <Logo />
      <nav className="main-nav header__main-nav">
        <ul className="main-nav__list">
          <li className="main-nav__item">
            <Link className="link not-disabled active" to={AppRoute.Main}>Квесты</Link>
          </li>
          <li className="main-nav__item">
            <Link className="link" to={AppRoute.Contacts}>Контакты</Link>
          </li>
          {authorizationStatus && <BookingButton />}
        </ul>
      </nav>
      <div className="header__side-nav">
        {authorizationStatus ? <ExitButton /> : <EntryButton />}
        <a className="link header__side-item header__phone-link" href="tel:88003335599">8 (000) 111-11-11</a>
      </div>
    </div>
  </header>
);

export default Header;
