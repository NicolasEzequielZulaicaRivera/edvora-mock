import Image from "next/image";
import { userType } from "../../common/common";
import styles from "./Navbar.module.scss";

type navbarProps = {
  user: userType;
};

const Navbar = ({ user }: navbarProps) => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.title}>Edvora</div>
      <div className={styles.user}>
        <div className={styles.name}>{user?.name}</div>
        {user?.url ? (
          <Image
            className={styles.image}
            src={user?.url}
            alt={`${user?.name}'s profile picture`}
            width="44px"
            height="44px"
          />
        ) : (
          <div className={styles.image} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
