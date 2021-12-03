import { useState, FormEvent, SyntheticEvent } from 'react';
import { useAuth } from '../context/AuthProvider';
import { TypeUser } from '../types/index';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const { login } = useAuth();
  const navigation = useNavigate();

  const [user, setUser] = useState<TypeUser>({
    mail: '',
    password: '',
  });

  const handlerChangeInputs = (e: FormEvent<HTMLInputElement>): void => {
    setUser({
      ...user,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handlerSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    login(user, () => {
      navigation('/home');
    });
  };

  const { mail, password } = user;
  return (
    <form onSubmit={handlerSubmit}>
      <div>
        <label htmlFor='mail'>Correo Electrónico</label>
        <input
          onChange={handlerChangeInputs}
          value={mail}
          name='mail'
          id='mail'
          type='text'
          placeholder='Ingresa tu correo'
        />
      </div>
      <div>
        <label htmlFor='password'>Contraseña</label>
        <input
          onChange={handlerChangeInputs}
          value={password}
          name='password'
          id='password'
          type='password'
          placeholder='Ingresa tu contraseña'
        />
      </div>
      <button type='submit'>Iniciar sessíon</button>
    </form>
  );
};

export default Login;
