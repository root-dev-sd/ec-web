import { NavLink } from "react-router";

const IntroPage = () => {
  return (
    <>
      <p className="text-5xl">hello world!</p>
      <NavLink to={"/home"}>to home</NavLink>
    </>
  );
};

export default IntroPage;
