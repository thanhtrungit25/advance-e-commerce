import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const LoginPage = () => {
  const { t } = useTranslation("auth");

  return (
    <>
      <h1>{t("login.signIn")}</h1>
      <Link to={"/"}>Home Page</Link>
    </>
  );
};

export default LoginPage;
