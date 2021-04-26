import styled from "styled-components";

const FooterSection = styled.div`
  background: #000;
  color: #fff;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: italic;
  display: flex;
  min-height: 10vh;
  flex-direction: column;
`;

const Footer = () => {
  return (
    <FooterSection>
      <p>Amigo Mio Run Club, Ltd. • 2021 • All Rights Reserved.</p>
    </FooterSection>
  );
};

export default Footer;
