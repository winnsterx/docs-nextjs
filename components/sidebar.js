import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./sidebar.module.css";
import Tree from "antd/lib/tree";
const treeData = require("../docs/manifest.json")[0].children;

export default function SideBar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleSelect = (selectedKeys, e) => {
    let key = selectedKeys[0];
    if (key && key.includes(".md")) {
      key = key.slice(0, -3);
      router.push(key);
      setOpen(false);
    }
  };

  return (
    <>
      <div className={styles.dropdown}>
        <button className={styles.menuButton} onClick={() => setOpen(!open)}>
          Menu
        </button>
        {open && (
          <div className={styles.dropdownContent}>
            <h2>Documentations</h2>
            <Tree treeData={treeData} onSelect={handleSelect} />
          </div>
        )}
      </div>

      <div className={styles.sidebar}>
        <h2>Documentations</h2>
        <Tree treeData={treeData} onSelect={handleSelect} />
      </div>
    </>
  );
}
