import { useState } from 'react'

const initialState = {
  email: '',
  password: '',
}

const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const handleOnChange = (e) => {
    try {
      const {name, value} = e.target;
      setFormData({
        ...formData,
        [name]: value,
      })
    } catch (err) {
      console.error(err);
    }
  }

  const handleOnSubmit = (e) => {
    try {
      e.preventDefault();
      if (Object.values(formData).every(val => val)) {

      }
    } catch (err) {
      console.error(err);
    }
  }

  const handleFormReset = () => {
    setFormData(initialState);
  }

  const {email, password} = formData;
  return (
    <div className="column is-12">
      <form className='form box'>
        <div className='field'>
          <label htmlFor='email' className='label'>Email</label>
          <div className='control'>
            <input type='email' id='email' name='email' className='input' placeholder='' value={email}
              onChange={handleOnChange} required autoFocus />
          </div>
        </div>
        <div className='field'>
          <label htmlFor='password' className='label'>Password</label>
          <div className='control'>
            <input type='password' id='password' name='password' className='input' placeholder='' value={password}
              onChange={handleOnChange} required />
          </div>
        </div>
        <div className='field is-grouped'>
          <div className='control'>
            <button className='button is-link' onClick={handleOnSubmit}>Login</button>
          </div>
          <div className='control'>
            <button className='button is-danger is-light' onClick={handleFormReset}>Reset</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login;
