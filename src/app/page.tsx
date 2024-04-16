import Header from "@/components/menu/header";

import Home from "./Home";
import Footer from "@/components/Footer";
import About from "./sobre";
import Customers from "./parceiros";

import '../styles/global.css';

export default function App() {
  return (
    <div className="flex flex-col h-screen m-0 p-0">
      <header>
        <Header />
      </header>
      <main>
        <Home />
        <About />
        <Customers />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
