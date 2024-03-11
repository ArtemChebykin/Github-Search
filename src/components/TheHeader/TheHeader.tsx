import { ThemeSwitcher } from "../ThemeSwitcher";
import styles from "./TheHeader.module.scss";

export const TheHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>Github-Search</div>
      <ThemeSwitcher />
    </div>
  );
};