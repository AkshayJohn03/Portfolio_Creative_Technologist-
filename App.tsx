
import React, { useState, useEffect, useLayoutEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioSection from './components/PortfolioSection';
import About from './components/About';
import Skills from './components/Skills';
import AIChat from './components/AIChat';
import Contact from './components/Contact';
import NeuralBackground from './components/NeuralBackground';
import CaseStudy from './components/CaseStudy';

const App: React.FC = () => {
  const [isAiMode, setIsAiMode] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [activeView, setActiveView] = useState<'home' | 'case-study'>('home');
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

  const toggleMode = () => {
    setIsAiMode(!isAiMode);
    if (activeView === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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

  return (
    <div className={`${theme}`}>
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
              <Hero isAiMode={isAiMode} toggleMode={toggleMode} />
              <PortfolioSection isAiMode={isAiMode} onOpenCaseStudy={handleOpenCaseStudy} />
              <Skills isAiMode={isAiMode} />
              <About />
              <AIChat />
            </main>
          </div>
        ) : (
          <main key="case-study-view" className="relative z-10 animate-fade-in-up">
            <CaseStudy 
              onBack={handleBackToHome} 
              projectId={currentCaseStudyId!} 
              isAiMode={isAiMode} 
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
