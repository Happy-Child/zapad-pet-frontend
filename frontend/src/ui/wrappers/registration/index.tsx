import "./style.scss"
import {GuestLayoutContainer} from "../../templates/guest";
import {OAuthForm} from "../../organisms/OAuthForm";
import {ALink} from "../../atoms/ALink";
import {AInput} from "../../atoms/AInput";
import {AButton} from "../../atoms/AButton";
import React from "react";

const RegistrationContainer: React.FC = () => {
  return (
    <GuestLayoutContainer>
      <OAuthForm>
        <span className="o-auth-form__title">
          Регистрация
        </span>
        <span className="o-auth-form__sub-title">
          Уже есть аккаунт?
          <ALink as="/login" href="login" className="a-link_main">Авторизироваться</ALink>
        </span>
        <form className="o-auth-form__form">
          <AInput className="o-auth-form__field" placeholder="example@mail.com" />
          <AInput className="o-auth-form__field" type="password" placeholder="Пароль" />
          <AInput className="o-auth-form__field" type="password" placeholder="Повторить пароль" />
          <AButton className="o-auth-form__button">Зарегистрироваться</AButton>
        </form>
      </OAuthForm>
    </GuestLayoutContainer>
  )
}


export { RegistrationContainer }
