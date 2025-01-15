import { Outlet } from "react-router";
import Header from "../components/HomeLayoutComponents/Header";
import Footer from "../components/HomeLayoutComponents/Footer";

const HomePageLayout = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomePageLayout;
