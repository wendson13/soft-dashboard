import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { FormEvent, useState } from 'react';
import { AiFillShop } from 'react-icons/ai';
import { BsFileTextFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { IoRocketSharp } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { Checkbox } from '../../components/Checkbox';
import { LoggedOutFooter } from '../../components/Footer/LoggedOutFooter';
import { Spinner } from '../../components/Loading';
import { useAuth } from '../../hooks/useAuth';
import { BackgroundImage, Container, Header, SubmitBox } from './styles';

export function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();
  const { colors } = useTheme();
  const [termsIsAccept, setTermsIsAccept] = useState(true);
  const navigation = useNavigate();

  const handleUserRegister = async (event: FormEvent) => {
    event.preventDefault();

    if (!email.trim() || !password.trim() || !termsIsAccept) return;

    setLoading(true);


    await signUp({ email, password })

    setLoading(false);
    navigation('/')
  }

  return (
    <>
      <Header>
        <strong>Soft Dashboard</strong>

        <nav>
          <Link to='/'>
            <AiFillShop size={20} color={colors.gray1} />
            Dashboard
          </Link>
          <Link to='/profile'>
            <FaUserAlt size={20} color={colors.gray1} />
            Profile
          </Link>
          <Link to='/login'>
            <BsFileTextFill size={20} color={colors.gray1} />
            Sign In
          </Link>
          <Link to='/register'>
            <IoRocketSharp size={20} color={colors.gray1} />
            Sign Up
          </Link>
        </nav>
      </Header>

      <Container>
        <BackgroundImage />

        <div>
          <h1>Register with</h1>

          <span>or</span>

          <form
            onSubmit={handleUserRegister}
          >
            <input
              type='text'
              placeholder='Name'
            />

            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={e => setEmail(e.target.value.trim())}
            />

            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={e => setPassword(e.target.value.trim())}
            />

            <Checkbox
              isChecked={termsIsAccept}
              toggle={() => setTermsIsAccept(!termsIsAccept)}
              isRequired={true}
            >
              I agree the {<Link to='/terms'>Terms and Conditions</Link>}
            </Checkbox>

            <SubmitBox>
              {
                loading ?
                  <AccessibleIcon.Root
                    label='loading spinner.'
                    children={<Spinner size={2} borderSize={.5} />}
                  />
                  :
                  <button type='submit'>SIGN UP</button>
              }
            </SubmitBox>

            <span>
              Already have an account? <Link to='/login'>Sign In</Link>
            </span>
          </form>
        </div>
      </Container>

      <LoggedOutFooter />
    </>
  );
}
