
import React, { useEffect, useRef, useState } from 'react';
import { SKILLS_DATA } from '../constants';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);



  return (
    <section ref={sectionRef} className="py-20 sm:py-32 bg-gray-50/50 dark:bg-dark border-y border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold mb-6 text-gray-900 dark:text-white">
            Technical <span className="text-accent">Expertise</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            A comprehensive stack built on years of cross-disciplinary exploration between design aesthetics and computational logic.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {SKILLS_DATA.map((category, catIdx) => (
            <div
              key={category.title}
              className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${catIdx * 200}ms` }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-accent"></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 sm:py-2.5 bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl text-gray-700 dark:text-gray-300 text-xs sm:text-sm hover:border-accent/40 hover:text-accent dark:hover:text-white transition-all duration-300 cursor-default shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
