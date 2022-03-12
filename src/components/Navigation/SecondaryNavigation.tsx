import ActiveLink from "./ActiveLink";
import styles from "./Navbar.module.scss";

const SecondaryNavigation = () => {
  return (
    <div className={styles.SecondaryNavigation}>
      <div className={styles.pages}>
        <ActiveLink activeClassName={styles.active} href={"/rides/nearest"}>
          <a className={styles.link}>Nearest rides</a>
        </ActiveLink>
        <ActiveLink activeClassName={styles.active} href={"/rides/upcoming"}>
          <a className={styles.link}>Upcoming rides</a>
        </ActiveLink>
        <ActiveLink activeClassName={styles.active} href={"/rides/past"}>
          <a className={styles.link}>Past rides</a>
        </ActiveLink>
      </div>
      <div className={styles.filters}>
        <span className="material-icons">sort</span>Filters
      </div>
    </div>
  );
};

export default SecondaryNavigation;
