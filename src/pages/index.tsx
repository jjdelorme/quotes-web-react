import AppBar from "@mui/material/AppBar";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <AppBar className={styles.appBar} position="static">Quotes</AppBar>
      <p>Hello World!</p>
    </>
  );
}
