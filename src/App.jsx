import CursorGlow from './components/CursorGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#05070B] text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-300 relative">
      {/* Interactive cursor glow light */}
      <CursorGlow />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Section */}
        <About />

        {/* 3. Skills Grid */}
        <Skills />

        {/* 4. Featured Projects */}
        <Projects />

        {/* 5. Hackathons & Achievements */}
        <Achievements />

        {/* 6. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
