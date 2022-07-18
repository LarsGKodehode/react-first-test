import logo from '../../assets/logo/logo.svg';

import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles['navbar-container']}>
      {/* Main Logo */}
      <img className={styles['logo']} src={logo} />
      <h2 className={styles['logo-title']}>React Tryout</h2>

      {/* Navbar Links */}
      <ul className={styles['links-container']}>
        <li className={styles['links']}><a href='/index.html'>Foling</a></li>
        <li className={styles['links']}><a href='/index.html'>Around</a></li>
        <li className={styles['links']}><a href='/index.html'>With</a></li>
        <li className={styles['links']}><a href='/index.html'>React</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;