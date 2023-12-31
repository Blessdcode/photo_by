import React from "react";
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import styles from "./styles";
import { AnimatePresence,motion } from 'framer-motion'


const Layout = () => {

  return (
    <motion.div
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    >
    <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <Outlet />
      <Footer />
    </motion.div>
  );
};

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  // const location = useLocation()

  return (
    <div>
       <AnimatePresence wait>
      <RouterProvider router={router} />
       </AnimatePresence>
    </div>
  );
}

export default App;
