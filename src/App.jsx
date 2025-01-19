import { Routes, Route } from "react-router-dom";
import HomePageLayout from "./layouts/HomePageLayout";
import Home from "./pages/IntroPages/HomePage";
import Services from "./pages/IntroPages/ServicesPage";
import Schedule from "./pages/IntroPages/SchedulePage";
import Records from "./pages/IntroPages/RecordsPage";
import More from "./pages/IntroPages/MorePage";
import AuthLayout from "./layouts/AuthLayout";
import LogIn from "./pages/AuthPages/LogInPage";
import SignUp from "./pages/AuthPages/SignUpPage";
import IntroPage from "./layouts/IntroLayout";
import Appointments from "./pages/HomePages/AppointmentsPage";
import Pharmacy from "./pages/HomePages/PharmacyPage";
import HomeVisits from "./pages/HomePages/HomeVisitsPage";
import Lab from "./pages/HomePages/LabPage";
import Search from "./pages/AppointmentsPages/SearchPage";
import SearchResults from "./pages/AppointmentsPages/SearchResultsPage";
import Booking from "./pages/AppointmentsPages/BookingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<IntroPage />} end />
        <Route element={<HomePageLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="records" element={<Records />} />
          <Route path="more" element={<More />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="/home">
          <Route path="appointments" element={<Appointments />} />
          <Route path="pharmacy" element={<Pharmacy />} />
          <Route path="homevisits" element={<HomeVisits />} />
          <Route path="lab" element={<Lab />} />
          <Route path="appointments/*">
            <Route path="search" element={<Search />} />
            <Route path="searchresults" element={<SearchResults />} />
            <Route path="booking" element={<Booking />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
