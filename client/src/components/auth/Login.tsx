import { Button } from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch } from "../../hook";
import { authActions } from "../../store/auth";
import style from "./login.module.sass";
import { useTranslation } from "react-i18next";

export function Login() {
  const dispatch = useAppDispatch();
  const [t, i18n] = useTranslation("global");
  const [error, setError] = useState<
    string | { message: string; code: number }
  >();

  const submitLoginForm = () => {
    dispatch(authActions.login());
  };

  return (
    <div className={style.container}>
      <form className={style.form}>
        <label htmlFor="username">{t("login.username")}</label>
        <input type="text" />
        <label>{t("login.password")}</label>
        <input type="text" />
        <Button onClick={submitLoginForm}>{t("login.login")}</Button>
      </form>
    </div>
  );
}
