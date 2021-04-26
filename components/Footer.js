import styled from "styled-components";

const FooterSection = styled.div`
  background: #000;
  color: #fff;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-style: italic; */
  display: flex;
  min-height: 15vh;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    padding: 10px;
    text-align: center;
    line-height: 1.5rem;
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <a
        href="https://www.instagram.com/amigomiorunclub/"
        style={{ marginTop: 15 }}
        target="_blank"
      >
        <img src="ig.png" style={{ height: 25 }} alt="ig-logo" />
      </a>{" "}
      <p style={{ marginTop: 10 }}>
        {/* Amigo Mio Run Club, Ltd. • 2021 • All Rights Reserved. •{"  "} */}
        <b>Amigo Mio Run Club,</b> <em>All Rights Reserved</em>
      </p>
    </FooterSection>
  );
};

export default Footer;
