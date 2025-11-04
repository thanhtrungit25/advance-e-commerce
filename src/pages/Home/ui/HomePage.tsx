import { Link } from "react-router";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";

import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.content}>
        <Link to={"/login"}>Login Page</Link>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
