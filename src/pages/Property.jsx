import Header from "../components/Header/Header";
import Slideshow from "../components/Slideshow/Slideshow";
import PropertyDetails from "../components/PropertyDetails/PropertyDetails";
import PropertyCollapses from "../components/PropertyCollapses/PropertyCollapses";
import Footer from "../components/Footer/Footer";
import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProperties } from "../api/api";
import ReturnButton from "../components/ReturnButton/ReturnButton";

function Property() {
  const [properties, setProperties] = useState([]);

  // Retrieve properties data
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProperties();
        console.log("Data received in component:", data);
        setProperties(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des locations:", error);
      }
    }

    fetchData();
  }, []);

  // Retrieve property ID via URL
  let pageId = useParams();
  console.log("Page ID:", pageId);

  // Return null or a loader while properties are being fetched
  if (properties.length === 0) {
    return <div>Chargement...</div>;
  }

  // Determine the data to retrieve based on the property ID
  const currentProperty = properties.find(
    (p) => p.id.toString() === pageId.id.toString()
  );
  console.log("Current Property:", currentProperty);

  // Redirect to error page if ID does not exist
  if (currentProperty === undefined) {
    return <Navigate to="*" replace={true} />;
  }

  return (
    <>
      <ReturnButton />
      <Header />
      <main>
        <Slideshow currentProperty={currentProperty} />
        <PropertyDetails currentProperty={currentProperty} />
        <PropertyCollapses currentProperty={currentProperty} />
      </main>
      <Footer />
    </>
  );
}

export default Property;
