import Link from 'next/link';
import "./style.scss"

const HomeContainer = () => {
  return (
    <div className="container">
      <Link as="/login" href="/login">login</Link>
      <Link as="/registration" href="/registration">reg</Link>
    </div>
  )
}


export { HomeContainer }
