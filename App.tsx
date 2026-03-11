
import React, { useState, useEffect, useLayoutEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioSection from './components/PortfolioSection';
import About from './components/About';
import Skills from './components/Skills';
import AIChat from './components/AIChat';
import Contact from './components/Contact';
import NeuralBackground from './components/NeuralBackground';
import CaseStudy from './components/CaseStudy';
import VisualWorks from './components/VisualWorks';
import IdentityLayer from './components/IdentityLayer';
import AIExperiments from './components/AIExperiments';
import FlagshipSystems from './components/FlagshipSystems';
import EvolutionTimeline from './components/EvolutionTimeline';
import SplashScrollSequence from './components/SplashScrollSequence';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [splashDone, setSplashDone] = useState(false);
  const [activeView, setActiveView] = useState<'home' | 'case-study' | 'visual-works'>('home');

  const handleSplashComplete = useCallback(() => {
    setSplashDone(true);
    // After wipe completes, scroll to top of main content
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 50);
  }, []);
  const [currentCaseStudyId, setCurrentCaseStudyId] = useState<string | null>(null);

  // Handle view switch and hash scrolling
  useEffect(() => {
    if (activeView === 'home' && window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [activeView]);

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Only scroll to top on initial page load if no hash
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };


  const handleOpenCaseStudy = (projectId: string) => {
    // Immediate view switch
    setCurrentCaseStudyId(projectId);
    setActiveView('case-study');
    // Force immediate scroll to top for the new view
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setActiveView('home');
    setCurrentCaseStudyId(null);
  };

  const handleOpenVisualWorks = () => {
    setActiveView('visual-works');
    window.scrollTo(0, 0);
  };

  return (
    <div className={`${theme}`}>
      {/* Splash scroll sequence — shown on first load */}
      {!splashDone && <SplashScrollSequence onComplete={handleSplashComplete} />}

      <div className="bg-gray-50 dark:bg-dark min-h-screen text-gray-900 dark:text-white selection:bg-accent selection:text-white relative transition-all duration-500 ease-in-out">
        <NeuralBackground theme={theme} />

        <Navbar
          theme={theme}
          toggleTheme={toggleTheme}
          onHomeNavigate={handleBackToHome}
          isAtHome={activeView === 'home'}
        />

        {activeView === 'home' ? (
          <div key="home-view" className="animate-fade-in-up">
            <main className="relative z-10">
              <Hero />
              <IdentityLayer />
              <EvolutionTimeline />
              <FlagshipSystems onOpenCaseStudy={handleOpenCaseStudy} />
              <PortfolioSection
                onOpenCaseStudy={handleOpenCaseStudy}
                onOpenVisualWorks={handleOpenVisualWorks}
              />
              <AIExperiments />
              <Skills />
              <About />
              <AIChat />
            </main>
          </div>
        ) : activeView === 'case-study' ? (
          <main key="case-study-view" className="relative z-10 animate-fade-in-up">
            <CaseStudy
              onBack={handleBackToHome}
              projectId={currentCaseStudyId!}
              onOpenCaseStudy={handleOpenCaseStudy}
            />
          </main>
        ) : (
          <main key="visual-works-view" className="relative z-10 animate-fade-in-up">
            <VisualWorks
              onBack={handleBackToHome}
              onOpenCaseStudy={handleOpenCaseStudy}
            />
          </main>
        )}

        <Contact />
      </div>
    </div>
  );
};

export default App;
