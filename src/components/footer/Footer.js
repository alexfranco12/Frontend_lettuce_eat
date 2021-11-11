import styled from 'styled-components';

export const Footer = () => {
  return (
    <FooterStyled>
      &copy; Alex Franco
    </FooterStyled>
  );
};

const FooterStyled = styled.div`
  grid-column: 2 / span 12;
  grid-row: 4;
`;