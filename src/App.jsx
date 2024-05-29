import { useState } from "react";
import NavBar from "./components/NavBar";
import HomeHeader from "./components/HomeHeader";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="container mx-auto">
        <nav>
          <NavBar />
        </nav>
        <main>
          <HomeHeader />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
  );
}

export default App;
