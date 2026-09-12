import { Suspense, useState } from "react";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Technologies from "./components/technologies/Technologies";
import type { TechnologiesType } from "./components/type/technologiesType";

const technologiesFetch = async (): Promise<TechnologiesType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const [technologiesPromise] = useState(() => technologiesFetch());
  return (
    <div className="font-[inner]">
      <Navbar />
      <Banner />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
