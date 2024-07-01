import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Collapse from "../components/Collapse/Collapse";
import { useEffect, useState } from "react";
import { getAboutData } from "../api/api";

function About() {
  const [aboutDatas, setAboutDatas] = useState([]);

  // Retrieve about data
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAboutData();
        setAboutDatas(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des locations:", error);
      }
    }

    fetchData();
  }, []);
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
