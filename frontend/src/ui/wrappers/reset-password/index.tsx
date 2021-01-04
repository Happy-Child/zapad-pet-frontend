import "./style.scss"
import {GuestLayoutContainer} from "../../templates/guest";
import {OAuthForm} from "../../organisms/OAuthForm";
import {ALink} from "../../atoms/ALink";
import {AInput} from "../../atoms/AInput";
import {AButton} from "../../atoms/AButton";

const ResetPasswordContainer = () => {
  const prevRouteAs = '/login';
  const prevRouteHref = 'login';

  return (
    <GuestLayoutContainer>
      <OAuthForm>
        <span className="o-auth-form__title">
          Восстановление пароля
        </span>
        <span className="o-auth-form__sub-title">
          Введите адрес электронной почты, который вы использовали при регистрации, и мы пришлем вам инструкции по сбросу пароля.
        </span>
        <form className="o-auth-form__form">
          <AInput className="o-auth-form__field" placeholder="example@mail.com" />
          <AButton className="o-auth-form__button">Восстановить пароль</AButton>
        </form>
        <ALink className="o-auth-form__prev-link" as={prevRouteAs} href={prevRouteHref}>Назад</ALink>
      </OAuthForm>
    </GuestLayoutContainer>
  )
}


export { ResetPasswordContainer }
