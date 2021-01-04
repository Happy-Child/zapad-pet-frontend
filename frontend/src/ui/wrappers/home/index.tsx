import "./style.scss"
import Link from 'next/link';
import { MemberLayoutContainer } from "../../templates/member";

const HomeContainer = () => {
  return (
    <MemberLayoutContainer>
      <Link as="/login" href="/login">login</Link>
      <Link as="/registration" href="/registration">reg</Link>
    </MemberLayoutContainer>
  )
}


export { HomeContainer }
