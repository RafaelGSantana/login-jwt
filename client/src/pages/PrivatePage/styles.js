import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   height: 100vh;
`;

export const Header = styled.div`
   width: 100%;
   height: 120px;
   background-color: rgba(0, 101, 120, 0.7);
   padding: 0 1.5rem;
`;

export const HeaderContent = styled.div`
   width: 100%;
   max-width: 1100px;
   height: 100%;
   margin: 0 auto;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

export const UserGreetings = styled.div`
   p {
      color: #fbfeff;
      font-size: 1.3rem;
      font-weight: 500;
   }
`;

export const Logout = styled.button`
   display: flex;
   align-items: center;
   justify-content: space-between;
   background-color: transparent;
   border: none;
   color: #fbfeff;
   font-size: 1.1rem;
   font-weight: 500;
   width: 80px;
   border: 2px solid #fbfeff;
   border-radius: 6px;
   transition: color 0.3s;
   padding: 6px 8px;

   &:hover {
      filter: brightness(0.3)
   }
`;

export const Body = styled.div`
   width: 100%;
   margin-top: 64px;
   padding: 0 1.5rem;
`;

export const BodyContent = styled.div`
   width: 100%;
   max-width: 1100px;
   height: auto;
   margin: 0 auto;
   display: flex;
   align-items: center;
   justify-content: center;

   h1 {
      font-size: 2rem;
   }
`;