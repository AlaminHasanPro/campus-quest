import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";

const Root = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
