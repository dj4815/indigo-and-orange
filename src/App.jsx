import { useState } from "react";
import NavBar from "./components/NavBar";
import HomeHeader from "./components/HomeHeader";
import HomeTextImageLeft from "./components/HomeTextImageLeft";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="container-2xl mx-auto bg-slate-100">
        <nav>
          <NavBar />
        </nav>
        <main>
        <HomeHeader />
        <HomeTextImageLeft />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
  );
}

export default App;
