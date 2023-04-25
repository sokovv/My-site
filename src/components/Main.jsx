import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


export default function Main(props) {
  return (
    <>
      <Header menu={props.menu} />
      <Outlet />
      <Footer />
    </>
  );
}
