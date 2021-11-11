import styled from "styled-components";
import { Header, Footer } from "../components";

export const MainLayout = ({ children }) => {
  return ( 
    <MainLayoutStyled>
      <Header/>
      {children}
      <Footer/>
    </MainLayoutStyled>
   );
};

const MainLayoutStyled = styled.div`
  display: grid;
  grid-template-columns: 1rem repeat(12, 1fr) 1rem;
  grid-template-rows: 4.8rem repeat(2, auto) 3rem;
  grid-gap: 0 2rem;
`;