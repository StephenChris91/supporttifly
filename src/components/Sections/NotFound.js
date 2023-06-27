import Link from "next/link";
import styles from "../../styles/NotFound/NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.error}>
      <div>
        <h1>404</h1>
        <h4>Oops! Page Not Found</h4>
        <p>The page you are looking for does not exist.</p>
        <Link href="/">Go back to the homepage</Link>
      </div>
    </div>
  );
};

export default NotFound;
