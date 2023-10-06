import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import "./styles/LoginPage.css"

const LoginPage = () => {

  const { register, reset, handleSubmit } = useForm()

  const { loginUser } = useAuth()

  const submit = (data) => {
    loginUser(data)
    reset({
      email: "",
      password: ""
    })
  }

  return (
    <div className="login">
      <div className="login__square">
        <img className="login__img" src="https://i.pinimg.com/564x/8b/32/ca/8b32ca04d90abbe2d6dc2e152eea34c8.jpg" alt="" />
        <section className="login__format">
          <form className="login__form" onSubmit={handleSubmit(submit)}>
            <div className="login__form__element">
              <label htmlFor="email">Email</label>
              <input {...register("email")} type="email" id="email" />
            </div>
            <div className="login__form__element">
              <label htmlFor="password">Password</label>
              <input {...register("password")} type="password" id="password" />
            </div>
            <div className="login__submit">
              <button className="login__btn">Login</button>
            </div>
          </form>
        </section>
      </div>
      <footer className="login__p">
        <p>Do you have an account? <Link className="login__link" to="/auth/register">Go to register</Link></p>
      </footer>
    </div >
  )
}

export default LoginPage