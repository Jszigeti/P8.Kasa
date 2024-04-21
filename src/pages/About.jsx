import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Collapse from "../components/Collapse/Collapse";
import { aboutDatas } from "../api/api";

function About() {
  return (
    <>
      <Header />
      <Banner banner="/assets/about-banner.jpg" />
      {/* Create a collapse for each element of the AboutData array */}
      {aboutDatas.map((aboutData) => (
        <Collapse
          title={aboutData.title}
          content={aboutData.content}
          key={aboutData.title}
        />
      ))}
      <Footer />
    </>
  );
}

export default About;
