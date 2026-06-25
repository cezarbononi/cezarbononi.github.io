import About from "./components/About";
import Academic from "./components/Academic";
import AIWorkflow from "./components/AIWorkflow";
import BackgroundFX from "./components/BackgroundFX";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Stack from "./components/Stack";
import Work from "./components/Work";
import CVPage from "./pages/CV";

export default function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";

  if (path === "/cv") {
    return <CVPage />;
  }

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
        <AIWorkflow />
        <Experience />
        <Academic />
        <Contact />
      </main>
    </div>
  );
}
