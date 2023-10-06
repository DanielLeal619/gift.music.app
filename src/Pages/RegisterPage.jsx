import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import "./styles/RegisterPage.css"

const RegisterPage = () => {

  const { handleSubmit, reset, register } = useForm()
  const { registerUser } = useAuth()

  const submit = (data) => {
    registerUser(data)
    reset({
      email: "",
      name: "",
      password: ""
    })
  }

  return (
    <div className="register">
      <div className="register__square">
        <img className="register__img" src="https://i.pinimg.com/564x/40/6b/81/406b819bb04d92e23eaa56de0a6d2393.jpg" alt="" />
        <section className="register__format">
          <form className="register__form" onSubmit={handleSubmit(submit)}>
            <div className="register__form__element">
              <label htmlFor="email">Email:</label>
              <input className="register__input" {...register('email')} type="email" id="email" />
            </div>
            <div  className="register__form__element">
              <label htmlFor="name">Name:</label>
              <input className="register__input" {...register('name')} type="text" id="name" />
            </div>
            <div  className="register__form__element">
              <label htmlFor="password">Password:</label>
              <input className="register__input" {...register('password')} type="password" id="password" />
            </div>
            <div className="register__submit">
              <button className="register__btn">Submit</button>
            </div>
          </form>
        </section>
      </div>
      <footer className="register__p">
        <p>Do you already have an account? <Link className="register__link" to="/auth/login">Go to login</Link></p>
      </footer>
    </div>
  )
}

export default RegisterPage