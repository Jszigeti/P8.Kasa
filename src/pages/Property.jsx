import Header from "../components/Header/Header";
import Slideshow from "../components/Slideshow/Slideshow";
import PropertyDetails from "../components/PropertyDetails/PropertyDetails";
import PropertyCollapses from "../components/PropertyCollapses/PropertyCollapses";
import Footer from "../components/Footer/Footer";
import { useParams, Navigate } from "react-router-dom";
import { propertiesDatas } from "../api/api";

function Property() {
  let pageId = useParams();
  const currentProperty = propertiesDatas.find((p) => p.id === pageId.id);
  if (currentProperty === undefined) {
    return <Navigate to="*" replace={true} />;
  }
  return (
    <>
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
