import ActiveLink from "./ActiveLink";
import styles from "./Navbar.module.scss";

export type countsType = {
  upcoming?: number;
  past?: number;
};

type SecondaryNavigationProps = {
  counts: countsType;
};

const SecondaryNavigation = ({ counts }: SecondaryNavigationProps) => {
  const upcomingCount = counts?.upcoming ? `(${counts.upcoming})` : "";
  const pastCount = counts?.past ? `(${counts.past})` : "";

  return (
    <div className={styles.SecondaryNavigation}>
      <div className={styles.pages}>
        <ActiveLink activeClassName={styles.active} href={"/rides/nearest"}>
          <a className={styles.link}>Nearest rides</a>
        </ActiveLink>
        <ActiveLink activeClassName={styles.active} href={"/rides/upcoming"}>
          <a className={styles.link}>Upcoming rides {upcomingCount}</a>
        </ActiveLink>
        <ActiveLink activeClassName={styles.active} href={"/rides/past"}>
          <a className={styles.link}>Past rides {pastCount}</a>
        </ActiveLink>
      </div>
      <div className={styles.filters}>
        <span className="material-icons">sort</span>Filters
      </div>
    </div>
  );
};

export default SecondaryNavigation;
