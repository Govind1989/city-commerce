import "@/styles/globals.css";
import Footer from "@/components/Common/Footer";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
