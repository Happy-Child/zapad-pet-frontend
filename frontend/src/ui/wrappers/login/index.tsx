import "./style.scss"
import { GuestLayoutContainer } from "../../templates/guest";
import { OAuthForm } from "../../organisms/OAuthForm";
import { ALink } from "../../atoms/ALink";
import { AInput } from "../../atoms/AInput";
import { AButton } from "../../atoms/AButton";

const LoginContainer = () => {
  return (
    <GuestLayoutContainer>
      <OAuthForm>
        <span className="o-auth-form__title">
          Авторизация
        </span>
        <span className="o-auth-form__sub-title">
          Нет аккаунта?
          <ALink as="/registration" href="registration" className="a-link_main">Зарегистрироваться</ALink>
        </span>
        <form className="o-auth-form__form">
          <AInput className="o-auth-form__field" placeholder="example@mail.com" />
          <AInput className="o-auth-form__field" type="password" placeholder="Пароль" />
          <span className="o-auth-form__sub-title o-auth-form__sub-title_bottom">
            Не помните пароля?
            <ALink as="/reset-password" href="reset-password">Восстановить пароль</ALink>
          </span>
          <AButton className="o-auth-form__button">Авторизироваться</AButton>
        </form>
      </OAuthForm>
    </GuestLayoutContainer>
  )
}

export { LoginContainer }
