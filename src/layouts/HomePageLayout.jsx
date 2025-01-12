import { Outlet } from "react-router";

const HomePageLayout = () => {
  return (
    <>
      <div>home layout</div>
      <Outlet />
    </>
  );
};

export default HomePageLayout;
