import { Outlet } from "react-router-dom";
import NavBar from "../components/layout/NavBar/NavBar";
import Footer from "../components/layout/Footer/Footer";

const RootLayout = (props) => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
