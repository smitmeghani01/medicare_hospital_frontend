import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContextProvider } from "../store/auth-context";
import Layout from "../components/Layout";
import AppointmentContext from "../components/context/AppointmentContext";
function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <AppointmentContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppointmentContext>
    </AuthContextProvider>
  );
}

export default MyApp;
