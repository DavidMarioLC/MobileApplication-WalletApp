import { useState, FormEvent, SyntheticEvent } from 'react';
import styled from 'styled-components';
import { useAuth } from '../context/AuthProvider';
import { TypeUser } from '../types/index';
import { useNavigate, Link } from 'react-router-dom';
import LogoLogin from '../images/logoLogin.png';
import {
  Wrapper,
  Field,
  Label,
  Input,
  Button,
  Form,
  Divider,
} from './globalStyles';

const Register = () => {
  const navigation = useNavigate();
  const { register } = useAuth();
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
    register(user, () => {
      alert('usuario registrado exitosamente!');
      navigation('/login');
    });
  };

  const { mail, password } = user;
  return (
    <StyledLogin>
      <Wrapper>
        <LoginContent>
          <div>
            <img src={LogoLogin} alt='' />
            <Title>Registrarme</Title>
          </div>
          <Form onSubmit={handlerSubmit}>
            <Field>
              <Label htmlFor='mail'>Correo Electrónico</Label>
              <Input
                onChange={handlerChangeInputs}
                value={mail}
                name='mail'
                id='mail'
                type='email'
                placeholder='Ingresa tu correo'
              />
            </Field>
            <Field>
              <Label htmlFor='password'>Contraseña</Label>
              <Input
                onChange={handlerChangeInputs}
                value={password}
                name='password'
                id='password'
                type='password'
                placeholder='Ingresa tu contraseña'
              />
            </Field>
            <Button type='submit'>Registrarme</Button>
          </Form>
        </LoginContent>
        <Divider />
        <Info>
          <StyledLink to='/login'>Volver</StyledLink>
        </Info>
      </Wrapper>
    </StyledLogin>
  );
};

const StyledLogin = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginContent = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled.h1`
  font: ${({ theme }) => theme.font.headline3};
  color: ${({ theme }) => theme.color.primary};
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const StyledLink = styled(Link)`
  font: ${({ theme }) => theme.font.body1Regular};
  color: ${({ theme }) => theme.color.primary};
  text-decoration: underline;
`;
export default Register;
