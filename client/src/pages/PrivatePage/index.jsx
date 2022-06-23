import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

import AuthContext from '../../contexts/Auth/AuthContext'

import {
   Container,
   Header,
   HeaderContent,
   UserGreetings,
   Logout,
   Body,
   BodyContent
} from './styles';

export function PrivatePage() {
   const [user, setUser] = useState('');
   const { signOut } = useContext(AuthContext);
   const navigate = useNavigate();

   useEffect(() => {
      async function loadStorageName() {
         const storageUserName = localStorage.getItem("@login-jwt:user");

         if(storageUserName) {
            setUser(storageUserName);
         }
      }

      loadStorageName();
   }, []);

   function handleSignOut() {
      signOut();

      navigate('/');
   }
   return (
      <Container>
         <Header>
            <HeaderContent>
               <UserGreetings>
                  <p>Olá, {user}</p>
               </UserGreetings>

               <Logout onClick={handleSignOut}>
                  Sair
                  <FiLogOut />
               </Logout>
            </HeaderContent>
         </Header>
         <Body>
            <BodyContent>
               <h1>Parabéns, você já possui uma conta em nosso sistema</h1>
            </BodyContent>
         </Body>
      </Container>
   );
}