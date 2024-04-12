import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Container from "../components/Container/Container";

function Home() {
  return (
    <>
      <Header />
      <Banner
        banner="/home-banner.jpg"
        lineOne="Chez vous,"
        lineTwo="partout et ailleurs"
      />
      <Container />
      <Footer />
    </>
  );
}

export default Home;
