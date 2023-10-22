import React, { useState, useEffect } from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import LandingPage from "./LandingPage";

type LayoutProps = {
  children: JSX.Element[] | JSX.Element;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isFirstTime, setIsFirstTime] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getFirstTime = localStorage.getItem("hasVisitedBefore");
    if (!getFirstTime) {
      localStorage.setItem("hasVisitedBefore", "true");
    }
    setIsFirstTime(Boolean(getFirstTime));
  }, []);

  return (
    <>
      {!isFirstTime && isLoading ? (
        <LandingPage onClick={() => setIsLoading(false)} />
      ) : (
        <>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
