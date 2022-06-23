import {
   Container,
   BackgroundImgWrapper,
   Content,
} from './styles';

import logo from "../../assets/logoWati.png";

export function Register() {
   return (
      <Container>
         <BackgroundImgWrapper>
            <img src={logo} alt="" />
         </BackgroundImgWrapper>
         <Content>
            
            <form>
               <h1>Faça seu logon</h1>

               <input class="name" type="text" placeholder="Nome" />
               
               <input class="email" type="text" placeholder="E-mail" />

               <input class="password" type="password" placeholder="Senha" />

               <input class="confirm-password" type="password" placeholder="Confirme a senha" />

               <button type="submit">Entrar</button>

            </form>

            <p>Não possui conta? <a href="">Cadastre-se aqui</a></p>
         </Content>
      </Container>      
   );
}