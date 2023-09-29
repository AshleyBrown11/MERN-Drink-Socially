import SignUpForm from '../../components/SignUpForm/SignUpForm.jsx'
import LoginForm from '../../components/LoginForm/LoginForm.jsx'

function LoginPage(props) {
  return (
    <main>
      <h1>LoginPage</h1>
      <SignUpForm setUser={props.setUser} />
      <LoginForm setUser={props.setUser} />
    </main>
  )
}

export default LoginPage