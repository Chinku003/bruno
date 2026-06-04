import styles from './NavBar.module.css';
import profileImage from '../../assets/profile.png.jpeg';

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <img src={profileImage} alt="profile" className={styles.profile} />
        
        
        </div>
      <div className={styles.navGroups}>
        <div className={styles.navPrimary}>
          <button type="button" className={styles.navButton}>About</button>
          <button type="button" className={styles.navButton}>Skills</button>
          <button type="button" className={styles.navButton}>Projects</button>
          <button type="button" className={styles.navButton}>Contact</button>
        </div>
        <div className={styles.navSecondary}>
          <button type="button" className={styles.navButton}>Theme</button>
          <button type="button" className={styles.navButton}>Search</button>
          <button type="button" className={styles.navButton}>Notifications</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;