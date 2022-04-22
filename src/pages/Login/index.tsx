import { FormEvent, useState } from 'react';
import { AiFillShop } from 'react-icons/ai';
import { BsFileTextFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { IoRocketSharp } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { LoggedOutFooter } from '../../components/Footer/LoggedOutFooter';
import { Spinner } from '../../components/Loading';
import { Switch } from '../../components/Switch';
import { useAuth } from '../../hooks/useAuth';
import { Container, Content, Header, RememberBox, SubmitBox, TitleBox } from './styles';

export function Login () {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const { signIn, user } = useAuth();
  const { colors } = useTheme();
  const navigation = useNavigate()

  const handleUserSignIn = async (event: FormEvent) => {
    event.preventDefault();

    if(!email.trim() && !password.trim()) return;
    setLoading(true);

    if(!user){
      await signIn({email, password, remember: isRemember});
    }

    setLoading(false);
    navigation('/');
  }

  return (
    <>
      <Header>
        <strong>Soft Dashboard</strong>

        <nav>
          <Link to='/'>
            <AiFillShop size={20} color={colors.gray8} />
            Dashboard
          </Link>
          <Link to='/profile'>
            <FaUserAlt size={20} color={colors.gray8} />
            Profile
          </Link>
          <Link to='/login'>
            <BsFileTextFill size={20} color={colors.gray8} />
            Sign In
          </Link>
          <Link to='/register'>
            <IoRocketSharp size={20} color={colors.gray8} />
            Sign Up
          </Link>
        </nav>
      </Header>

      <Container>
        <Content>
          <form onSubmit={handleUserSignIn}>
            <TitleBox>
              <h1>Sign In</h1>
              <p>Enter your email and password to sign in</p>
            </TitleBox>

            <label>Email
              <input 
                type='email'
                placeholder='Email'
                required
                value={email}
                onChange={e => setEmail(e.target.value.trim())}
              />
            </label>

            <label>Password
              <input
                type='password'
                placeholder='Password'
                minLength={6}
                maxLength={32}
                required
                value={password}
                onChange={e => setPassword(e.target.value.trim())}
              />
            </label>

            <RememberBox>
              <Switch isChecked={isRemember} toggle={() => setIsRemember(!isRemember)} />
              <span>Remember me</span>
            </RememberBox>

            <SubmitBox>
              { 
                loading ? 
                  <Spinner size={2} borderSize={.5} />
                :
                  <button type='submit'>SIGN IN</button>
              }
            </SubmitBox>

            <span>Don't have an account? <Link to={'/register'}>Sign Up</Link></span>
          </form>
        </Content>

        <img src='./sign-in-bg.png' alt='signIn background' />
      </Container>

      <LoggedOutFooter />
    </>
  );
}
