

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { initialize, pageview } from 'react-ga';
import {
  useLocation
} from "react-router-dom";
import { Contacts } from "./component/Contact";
import Experience from "./component/Experience";
import { Footer } from "./component/Footer";
import { MyThoughts } from "./component/MyThoughts";
import Navbar from "./component/Navbar";
import Services from "./component/RecentProjects";
import { HeaderComponent } from "./HeaderComponent/Header";


function App() {

  useEffect(() => {
    initialize('UA-218767240-1');

    pageview(window.location.pathname + window.location.hash + window.location.search);
  }, []);
  const location = useLocation();
  useEffect(() => {
    pageview(window.location.pathname + window.location.hash + window.location.search);

  }, [location])

  return (
    <>

      <Navbar />
      <HeaderComponent />
      <Services />
      <Experience />
      <MyThoughts />
      <Contacts />
      <Footer />


    </>
  );
}

export default App;
