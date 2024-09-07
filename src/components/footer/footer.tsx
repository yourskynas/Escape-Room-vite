import { nanoid } from '@reduxjs/toolkit';
import { Socials } from '../../constants';

type SocialsType = keyof typeof Socials;

type FooterIconProps = {
  socialKey: SocialsType;
  socialValue: typeof Socials[SocialsType];
}

const FooterIcon = ({socialKey, socialValue}: FooterIconProps): JSX.Element => (
  <li className="socials__item">
    <a className="socials__link" href="#" aria-label={socialValue} target="_blank" rel="nofollow noopener noreferrer">
      <svg className="socials__icon socials__icon--default" width="28" height="28" aria-hidden="true">
        <use xlinkHref={`#icon-${socialKey}-default`} ></use>
      </svg>
      <svg className="socials__icon socials__icon--interactive" width="28" height="28" aria-hidden="true">
        <use xlinkHref={`#icon-${socialKey}-interactive`}></use>
      </svg>
    </a>
  </li>
);

const Footer = (): JSX.Element => {
  const socials = Object.entries(Socials) as ([SocialsType, typeof Socials[SocialsType]])[];
  return (
    <footer className="footer">
      <div className="container container--size-l">
        <div className="socials">
          <ul className="socials__list">
            {socials.map(([socialKey, socialValue]) => <FooterIcon key={nanoid()} socialKey={socialKey} socialValue={socialValue} />)}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
