import React from 'react';
import Button from "../Button";
import Field from "../Field";
import { cn } from "@bem-react/classname";
import "./Login.css";

function Login(props) {
  const cnLogin = cn("login");
  const cnLoginTitle = cn(cnLogin(), "title");
  const cnLoginFields = cn(cnLogin(), "fields");

  const handleLoginButtonClick = () => {
    props.handleCurtain();
    props.handleLoginForm();
    props.authenticate(true);
  }

  const setUserName = (event) => {
    if (event.target.value) {
      props.changeUserName(event.target.value);
    }
  }

  return (
    <section className={props.active ? cnLogin({"active": true}) : cnLogin({"active": false})}>
      <span className={cnLoginTitle()}>Вход</span>
        <div className={cnLoginFields()}>
          <Field placeholder="Логин" handleChange={setUserName} underlined={true}/>
          <Field placeholder="Пароль" underlined={true}/>
          <div><input type="checkbox" id="rememberMe"></input><label htmlFor="rememberMe">Запомнить</label></div>
        </div>
      <Button type="login" clickHandle={handleLoginButtonClick} title="Войти"></Button>
    </section>
  );
}

export default Login;
