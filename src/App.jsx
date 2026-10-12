import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';
import { portfolioData } from './data/portfolioData';

import { Navbar } from './components/Navbar';
import { ParticleBackground } from './components/ParticleBackground';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const { theme, toggleTheme } = useTheme();

  const sectionIds = ['home', 'about', 'services', 'skills', 'projects', 'experience', 'contact'];
  const activeSection = useScrollSpy(sectionIds, 120);

  return (
    <div className="portfolio-app" style={{ position: 'relative', overflowX: 'hidden' }}>
      {/* Dynamic Interactive Canvas Background */}
      <ParticleBackground theme={theme} />

      {/* Glassmorphic Navbar */}
      <Navbar
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
        personal={portfolioData.personal}
      />

      {/* Main Sections */}
      <main>
        <Hero personal={portfolioData.personal} />
        <About personal={portfolioData.personal} stats={portfolioData.stats} />
        <Services services={portfolioData.services} />
        <Skills skills={portfolioData.skills} />
        <Projects projects={portfolioData.projects} />
        <Experience experience={portfolioData.experience} />
        <Testimonials testimonials={portfolioData.testimonials} />
        <Contact personal={portfolioData.personal} />
      </main>

      {/* Footer */}
      <Footer personal={portfolioData.personal} />
    </div>
  );
}

export default App;
