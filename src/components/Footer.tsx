import styled from "styled-components/macro";

function Footer() {
  return (
    <FooterContainer>
      <Copiright href="https://github.com/beagle-elgaeb">2021 ©Никонова Евгения</Copiright>
    </FooterContainer>
  )
}

export default Footer;

const FooterContainer = styled.footer`
  box-shadow: 0 -3px 20px 1px yellowgreen;
`;

const Copiright = styled.a`
  font-size: 14px;
  line-height: 60px;
  font-weight: 400;
  text-decoration: none;
  color: yellowgreen;
  margin: 0 0 0 20px;
`;
