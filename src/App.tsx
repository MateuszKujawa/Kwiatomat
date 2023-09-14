import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import HowItWorks from "./components/HowItWorks";
import PayMethods from "./components/PayMethods";
import NeedHelp from "./components/NeedHelp";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <div className="flex flex-col gap-10">
        <Main />
        <HowItWorks />
        <PayMethods />
        <NeedHelp />
      </div>
      <Footer />
    </>
  );
}

export default App;
