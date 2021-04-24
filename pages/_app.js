import Layout from "../components/Layout";
import { AuthContextProvider } from "../stores/authContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </AuthContextProvider>
  );
}

export default MyApp;
