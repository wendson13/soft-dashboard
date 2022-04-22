import { FormEvent, useRef, useState } from 'react';
import { AiFillShop } from 'react-icons/ai';
import { BsCheckSquare, BsFileTextFill, BsFillCheckSquareFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { IoRocketSharp } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components'; 
import { LoggedOutFooter } from '../../components/Footer/LoggedOutFooter';
import { Spinner } from '../../components/Loading';
import { useAuth } from '../../hooks/useAuth';
import { BackgroundImage, Container, Header, SubmitBox, SwitchBox } from './styles';

export function Register () {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();
  const { colors } = useTheme();
  const [termsIsAccept, setTermsIsAccept] = useState(true);
  const navigation = useNavigate();

  const handleUserRegister = async (event: FormEvent) => {
    event.preventDefault();

    if(!isChecked){
      setTermsIsAccept(false);
    }
    
    if(!email.trim() || !password.trim() || !isChecked) return;

    setLoading(true);


    await signUp({email, password})

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

            <SwitchBox
              isAccept={termsIsAccept}
            >
              <button
                onClick={() => setIsChecked(!isChecked)}
                type='button'
              >
                {
                  isChecked ?  
                    <BsFillCheckSquareFill size={24} color={colors.dark} />
                    :
                    <BsCheckSquare size={24} color={termsIsAccept ? colors.dark : colors.danger} />
                }
              </button>

              <span>I agree the <Link to=''>Terms and Conditions</Link></span>
            </SwitchBox>

            <SubmitBox>
              { 
                loading ? 
                  <Spinner size={2} borderSize={.5} />
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
