import styles from "./docsLayout.module.css";
import SideBar from "./sidebar";

export default function DocsLayout({ children }) {
  return (
    <>
      <div className={styles.mainDoc}>
        <SideBar />
        <main>{children}</main>
      </div>
    </>
  );
}
