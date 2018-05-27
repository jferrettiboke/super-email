export default `
const Wrapper = ({ children }) => (
  <Box
    style={{
      margin: "20px 0",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale"
    }}
  >
    <Container>{children}</Container>
  </Box>
);

const Header = () => (
  <Box style={{ marginBottom: 25 }}>
    <Row>
      <Column>
        <Link
          href="https://www.example.com"
          style={{
            fontFamily:
              "Constantia, Lucida Bright, Lucidabright, Lucida Serif, Lucida, DejaVu Serif, Bitstream Vera Serif, Liberation Serif, Georgia, serif",
            color: "black",
            textDecoration: "none",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 20
          }}
        >
          Acme.
        </Link>
      </Column>
    </Row>
  </Box>
);

const Footer = () => (
  <Box
    style={{
      marginTop: 50,
      padding: "25px 0",
      backgroundColor: "#f5f5f5",
      color: "#b9b9b9",
      textAlign: "center"
    }}
  >
    <Row>
      <Column>
        <Paragraph>
          © {new Date().getFullYear()} Acme. All rights reserved.
        </Paragraph>
        <Paragraph>
          Acme, Inc
          <br /> 1234 Street Rd., Suite 1234
          <br /> New York, NY
          <br />
        </Paragraph>
      </Column>
    </Row>
  </Box>
);

const Layout = ({ children }) => (
  <Wrapper>
    <Header />
    {children}
    <Footer />
  </Wrapper>
);

const Button = props => (
  <Link
    {...props}
    style={{
      backgroundColor: "black",
      color: "white",
      textDecoration: "none",
      textTransform: "uppercase",
      padding: "10px 15px",
      fontSize: 14,
      fontWeight: "bold"
    }}
  />
);

const Spacing = ({ children }) => <Box style={{ marginBottom: 25 }} />;

const Paragraph = ({ ...rest }) => (
  <Text style={{ margin: "10px 0" }} {...rest} />
);

const WelcomeUserEmail = ({ firstName }) => (
  <Email title="Welcome to ACME" preview="Confirm your email.">
    <Layout>
      <Row>
        <Column>
          <Paragraph>{firstName}, welcome to ACME!</Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            incidunt vero asperiores quod. Aliquid saepe provident mollitia odit
            molestias ad porro beatae vitae minima. Officiis doloremque commodi
            earum eveniet corrupti.
          </Paragraph>
        </Column>
      </Row>

      <Spacing />

      <Row>
        <Column>
          <Button href="https://www.example.com">Let's get started</Button>
        </Column>
      </Row>
    </Layout>
  </Email>
);

<WelcomeUserEmail firstName="John" />;
`;
