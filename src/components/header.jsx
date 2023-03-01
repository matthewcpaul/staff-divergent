import styles from '../app/page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';

// Navigation Bar
const NavBar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <div className={styles.header}>
      <Link href='/' className={currentRoute === '/' ? styles.navLinkActive : styles.navLink}>
        <span>Staff Divergent</span>
      </Link>
    </div>
  );
};

export default NavBar;