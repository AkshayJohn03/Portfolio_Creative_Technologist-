import React from 'react';
import { Linkedin } from 'lucide-react';
import { EXPERIENCE_DATA } from '../constants';
import { SplineScene } from './SplineScene';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-white dark:bg-dark transition-colors duration-300">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left Column: Image & Summary */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-32 order-2 lg:order-1">
            <div className="relative mb-10 sm:mb-12">
              <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative bg-black/5 dark:bg-white/5">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-accent rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] opacity-20 pointer-events-none"></div>
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] opacity-20"></div>
            </div>

            <div className="px-2">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-2 text-gray-900 dark:text-white">Akshay John</h3>
              <p className="text-accent font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-6">Senior Product & Visual Designer</p>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg mb-6 font-light">
                Multidisciplinary Product Designer with 7+ years of experience creating digital experiences, brand identities, and motion visuals that connect users to products with emotion and clarity.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg font-light">
                Expert at bridging human-centered design with deep technical innovation in AI, I merge creativity with usability to craft high-impact solutions for enterprise scale.
              </p>
            </div>
          </div>

          {/* Right Column: Experience Timeline */}
          <div className="w-full lg:w-7/12 order-1 lg:order-2 mb-16 lg:mb-0">
            <div className="mb-12 sm:mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4 text-gray-900 dark:text-white leading-tight">
                Experience <br />
                <span className="text-gray-400 dark:text-gray-700">& Journey.</span>
              </h2>
            </div>

            <div className="border-l-2 border-black/5 dark:border-white/5 ml-4 sm:ml-6 space-y-12 sm:space-y-16 mb-20">
              {EXPERIENCE_DATA.map((exp, idx) => (
                <div key={idx} className="relative pl-8 sm:pl-12 group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[9px] top-2.5 w-4 h-4 rounded-full bg-white dark:bg-dark border-2 border-gray-300 dark:border-gray-700 group-hover:border-accent transition-all group-hover:scale-125"></div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight">{exp.role}</h3>
                    <span className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap bg-gray-50 dark:bg-white/5 px-2 py-1 rounded">{exp.period}</span>
                  </div>

                  <div className="text-accent text-sm sm:text-base font-bold mb-6 flex items-center gap-2 flex-wrap">
                    {exp.company}
                    {exp.linkedinUrl && (
                      <a href={exp.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0077b5] transition-colors -ml-1 flex items-center">
                        <Linkedin size={14} className="ml-1" />
                      </a>
                    )}
                    <span className="text-gray-300 dark:text-gray-700 ml-1">•</span> <span className="text-gray-500 font-medium">{exp.location}</span>
                  </div>

                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed flex items-start">
                        <span className="mr-3 mt-2 w-1.5 h-1.5 bg-accent/30 dark:bg-accent/50 rounded-full flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education Section */}
            <div>
              <h4 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-8 border-b border-black/5 dark:border-white/5 pb-4 inline-block">Academic Background</h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="p-6 sm:p-8 bg-gray-50 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5 hover:border-accent/30 transition-all group">
                  <h5 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-accent transition-colors">B.Sc in Visual Communication</h5>
                  <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                    <p className="font-bold text-gray-700 dark:text-gray-300">Loyola College, Chennai</p>
                    <p>2015 — 2018</p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 bg-gray-50 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5 hover:border-accent/30 transition-all group">
                  <h5 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-accent transition-colors">Higher Secondary</h5>
                  <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                    <p className="font-bold text-gray-700 dark:text-gray-300">Alpha Plus Matriculation, Trichy</p>
                    <p>2013 — 2015</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
