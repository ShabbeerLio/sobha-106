import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Gallery from "./Pages/Gallery/Gallery";
import PriceList from "./Pages/PriceList/PriceList";
import MasterPlan from "./Pages/MasterPlan/MasterPlan";
import FloorPlan from "./Pages/FloorPlan/FloorPlan";
import Location from "./Pages/Location/Location";
import SiteVisit from "./Pages/SiteVisit/SiteVisit";
import Disclaimer from "./Pages/Disclaimer/Disclaimer";

function App() {

  const title = "Sobha Altus Gurgaon - Sobha 106 Gurgaon Floor Plan Price List Payment Plan"
  const description = "SOBHA Altus Gurgaon is new age venture in the Brigade of Beautiful Homes; an aesthetically designed residential cum commercial complex in the heart of Gurgaon."

  // remove inspect and copy element
  //  useEffect(() => {
  //   const handleRightClick = (e) => {
  //     e.preventDefault();
  //   };

  //   const handleSelect = (e) => {
  //     e.preventDefault();
  //     return false;
  //   };

  //   document.addEventListener('selectstart', handleSelect);
  //   document.addEventListener('contextmenu', handleRightClick);

  //   return () => {
  //     document.removeEventListener('contextmenu', handleRightClick);
  //     document.removeEventListener('selectstart', handleSelect);
  //   };
  // }, []);

  return (
    <>
      <BrowserRouter>  
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home title={title} descriptions={description} />} />
          <Route path="/gallery" exact element={<Gallery title={"Gallery - Sobha Altus Gurgaon - Sobha 106 Gurgaon"} descriptions={"Gallery"} />} />
          <Route path="/price-list" exact element={<PriceList title={"Price List - Sobha Altus Gurgaon - Sobha 106 Gurgaon"} descriptions={"Price List"} />} />
          <Route path="/master-plan" exact element={<MasterPlan title={"Master Plan - Sobha Altus Gurgaon - Sobha 106 Gurgaon"} descriptions={"Master Plan"} />} />
          <Route path="/floor-plans" exact element={<FloorPlan title={"Floor Plans - Sobha Altus Gurgaon - Sobha 106 Gurgaon"} descriptions={"Floor Plans"} />} />
          <Route path="/location" exact element={<Location title={"Location - Sobha Altus Gurgaon - Sobha 106 Gurgaon"} descriptions={"Location"} />} />
          <Route path="/site-visit" exact element={<SiteVisit title={"Site Visit - Sobha Altus Gurgaon - Sobha 106 Gurgaon"} descriptions={"Site Visit"} />} />
          <Route path="/disclaimer" exact element={<Disclaimer title={"Disclaimer - Sobha Altus Gurgaon - Sobha 106 Gurgaon"} descriptions={"Disclaimer"} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
