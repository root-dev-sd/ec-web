import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <>
      <div>this is the Auth page</div>
      <Outlet />
    </>
  );
};

export default AuthLayout;
