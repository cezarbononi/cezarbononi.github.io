import About from "./components/About";
import BackgroundFX from "./components/BackgroundFX";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Stack from "./components/Stack";
import Work from "./components/Work";

export default function App() {
  return (
    <div id="top" className="cy-shell">
      <BackgroundFX />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Stack />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
