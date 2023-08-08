import "node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/custom.scss";

import Header from "@/components/reuseable/Header";
import Footer from "@/components/reuseable/Footer";
import Topbar from "@/components/reuseable/Topbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Topbar />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
