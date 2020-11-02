import Link from 'next/link';

import Logo from '../../public/logo.svg';
import Behance from '../../public/behance.svg';
import Twitter from '../../public/twitter.svg';
import Linkedin from '../../public/linkedin.svg';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/">
        <a>
          <Logo className={styles.logo} />
        </a>
      </Link>
      <nav className={styles.menu}>
        <ul className={styles.navList}>
          <li>
            <Link href="/">
              <a className={styles.link}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a className={styles.link}>Portfolio</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className={styles.link}>Contáctame</a>
            </Link>
          </li>
        </ul>
      </nav>
      <nav className={styles.rrss}>
        <ul className={styles.navList}>
          <li>
            <Behance  className={styles.link}/>
          </li>
          <li>
            <Twitter  className={styles.link}/>
          </li>
          <li>
            <Linkedin  className={styles.link}/>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
