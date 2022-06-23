import { useContext } from 'react';
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
   const { signOut } = useContext(AuthContext);
   const navigate = useNavigate();

   function handleSignOut() {
      signOut();

      navigate('/');
   }
   return (
      <Container>
         <Header>
            <HeaderContent>
               <UserGreetings>
                  <p>Olá, Rafael</p>
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