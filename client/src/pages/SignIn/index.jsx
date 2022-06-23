import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../../contexts/Auth/AuthContext';

import {
   Container,
   BackgroundImgWrapper,
   Content,
} from './styles';

import logo from "../../assets/logoWati.png";

export function SignIn() {
   const { signIn } = useContext(AuthContext);
   const navigate = useNavigate();
   
   const [email, setEmail] =useState('');
   const [password, setPassword] =useState('');

   const handleSubmitLogin = async (e) => {
      e.preventDefault();
      
      try{
         await signIn({
            email,
            password
         });

         navigate('/private');
      } catch(error) {
         console.log(error)
      }
   }

   return (
      <Container>
         <BackgroundImgWrapper>
            <img src={logo} alt="" />
         </BackgroundImgWrapper>
         <Content>
            
            <form>
               <h1>Faça seu logon</h1>

               <input
                  type="text"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="E-mail"
               />

               <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Senha"
               />

               <button
                  type="submit"
                  onClick={handleSubmitLogin}
               >
                  Entrar
               </button>

            </form>

            <p>Não possui conta? <a href="">Cadastre-se aqui</a></p>
         </Content>
      </Container>      
   );
}