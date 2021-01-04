import "./style.scss"
import {GuestLayoutContainer} from "../../templates/guest";
import {OAuthForm} from "../../organisms/OAuthForm";
import {AInput} from "../../atoms/AInput";
import {AButton} from "../../atoms/AButton";

const NewPasswordContainer = () => {
  return (
    <GuestLayoutContainer>
      <OAuthForm>
        <span className="o-auth-form__title">
          Введите новый пароль
        </span>
        <form className="o-auth-form__form">
          <AInput className="o-auth-form__field" type="password" placeholder="example@mail.com" />
          <AButton className="o-auth-form__button">Создать новый пароль</AButton>
        </form>
      </OAuthForm>
    </GuestLayoutContainer>
  )
}


export { NewPasswordContainer }
