import "./style.scss"
import {GuestLayoutContainer} from "../layouts/guest";
import {OAuthForm} from "../../ui/organisms/OAuthForm";
import {ALink} from "../../ui/atoms/ALink";
import {AInput} from "../../ui/atoms/AInput";
import {AButton} from "../../ui/atoms/AButton";

const RegistrationContainer = () => {
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
