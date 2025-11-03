import { Link } from "react-router";
import styles from "./HomePage.module.scss";
import { useTheme } from "@/shared/config";
import { useTranslation } from "react-i18next";
import { Button, Input } from "@/shared/ui";
import SearchIcon from "@/shared/assets/icons/Search.svg?react";

const HomePage = () => {
  const { toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "de" : "en");
  };

  return (
    <>
      <h1 className={styles.title}>{t("hello")}</h1>
      <Input placeholder="Search..." Icon={<SearchIcon />} />
      <Button onClick={changeLanguage}>
        {i18n.language}
      </Button>
      <br />
      <Button theme="outline" onClick={toggleTheme}>
        toggle theme
      </Button>
      <br />
      <Link to={"/login"}>Login Page</Link>
    </>
  );
};

export default HomePage;
