import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import ReturnButton from "../components/ReturnButton/ReturnButton";

function Error() {
  return (
    <>
      <ReturnButton />
      <Header />
      <ErrorMessage />
      <Footer />
    </>
  );
}

export default Error;
