import './App.css';
import Nav from './components/Nav.jsx';
import Main from './components/Main.js';
import HowItWorks from './components/HowItWorks';
import PayMethods from './components/PayMethods';
import NeedHelp from './components/NeedHelp';
import Footer from './components/Footer';

function App() {
  return(
    <>
      <Nav />
      <Main />
      <HowItWorks />
      <PayMethods />
      <NeedHelp />
      <Footer />
    </>
  );
}

export default App;
