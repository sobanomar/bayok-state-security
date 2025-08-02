import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import ContactUs from "./pages/ContactUs/ContactUs";
import AboutUs from "./pages/AboutUs/AboutUs";
import OurServices from "./pages/OurServices/OurServices";
import ConstructionSiteSecurity from "./pages/ConstructionSiteSecurity/ConstructionSiteSecurity";
import AlarmResponseSecurityServices from "./pages/AlarmResponseSecurityServices/AlarmResponseSecurityServices";
import SecurityPatrolServices from "./pages/SecurityPatrolServices/SecurityPatrolServices";
import MineSiteSecurityServices from "./pages/MineSiteSecurityServices/MineSiteSecurityServices";
import GatehouseSecurityService from "./pages/GatehouseSecurityService/GatehouseSecurityService";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route
          path="/service/construction-site-security"
          element={<ConstructionSiteSecurity />}
        />
        <Route
          path="/service/alarm-response-services"
          element={<AlarmResponseSecurityServices />}
        />
        <Route
          path="/service/security-patrol-services"
          element={<SecurityPatrolServices />}
        />
        <Route
          path="/service/construction-site-security"
          element={<ConstructionSiteSecurity />}
        />
        <Route
          path="/service/mine-site-security-services"
          element={<MineSiteSecurityServices />}
        />
        <Route
          path="/service/gatehouse-security-services"
          element={<GatehouseSecurityService />}
        />
      </Route>
    </Routes>
  );
}

export default App;
