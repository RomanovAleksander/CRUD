import LoginForm from "../components/LoginForm/LoginForm";

export const AuthPage = ({ isSignIn }) => {
  return (
    <LoginForm isSignIn={isSignIn} />
  )
}
