import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   height: 100vh;
   background-color: rgba(0, 101, 120, 0.7);

   display: flex;
   align-items: center;
   justify-content: center;
`;

export const BackgroundImgWrapper = styled.div`
   width: 40%;
   height: 100%;

   display: flex;
   align-items: center;
   justify-content: center;

   img {
      width: 320px;
      height: auto;
      object-fit: cover;
   }
`;

export const Content = styled.div`
   width: 60%;
   height: 100%;
   background-color: #fbfeff;

   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;

   form {
      width: 80%;
      height: auto;
      padding: 2rem 1.5rem 0;
      

      display: flex;
      flex-direction: column;
      align-items: center;
   
      h1 {
         font-size: 2rem;
         color: #005b6c;

         margin-bottom: 1rem;
      }

      input {
         width: 360px;
         height: 40px;
         border: 1px solid #999;
         border-radius: 6px;
         margin-bottom: 1rem ;
         padding: 8px 12px;
         font-size: 1.1rem;
         font-weight: 500;
         color: #010101;
      }

      button {
         width: 360px;
         height: 40px;
         border: none;
         border-radius: 6px;
         margin-bottom: 1rem ;
         padding: 8px 12px;
         background-color: rgba(0, 101, 120, 0.7);
         transition: background-color 0.3s;
         color: #fbfeff;
         font-weight: 600;
         font-size: 1.1rem;
         letter-spacing: 0.6px;
      }

      button:hover {
         background-color: #004f5e;
      }
   }

   p {
      font-size: 1rem;
      font-weight: 500;
      color: #010101;
      margin-bottom: 4rem;

      a {
         text-decoration: none;
         font-weight: 600;
         color: #005b6c;
         transition: color 0.3s;
      }

      a:hover {
         color: #004f5e;
         text-decoration: underline;
         text-decoration-thickness: 2px;
      }
   }
`;
