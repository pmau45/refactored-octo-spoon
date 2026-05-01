'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { trainingPhilosophyFAQs } from '@/app/data/training-philosophy-faqs';
import { ProgressChart, QuadrantChart } from '../ui/TrainingCharts';

export function TrainingPhilosophyDashboard() {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(null);

  const currentCategory = trainingPhilosophyFAQs[currentCategoryIndex];

  const toggleAccordion = (index: number) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  return (
    <main className="flex-grow w-full bg-stone-50 text-stone-800">
      {/* Header */}
      <header className="bg-stone-900 text-stone-50 py-12 px-6 border-b-4 border-amber-700">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Canine Behavioral Rehabilitation & Training
          </h1>
          <p className="text-xl md:text-2xl font-light text-stone-300 max-w-3xl leading-relaxed">
            Our training philosophy is built on real-world results and transparent communication. We specialize in
            high-drive breeds and behavioral rehabilitation, focusing on shifting a dog&apos;s state of mind rather than
            just managing symptoms.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12 flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <aside className="md:w-1/3 lg:w-1/4">
          <div className="sticky top-8 bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <h2 className="text-sm uppercase tracking-widest text-stone-500 font-bold mb-6">Explore Topics</h2>
            <nav className="flex flex-col gap-2">
              {trainingPhilosophyFAQs.map((faq, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentCategoryIndex(index);
                    setOpenAccordionIndex(null);
                  }}
                  className={`text-left px-4 py-3 rounded-lg font-medium transition-colors duration-200 border-l-4 ${
                    index === currentCategoryIndex
                      ? 'bg-stone-100 text-amber-700 border-amber-700'
                      : 'text-stone-600 border-transparent hover:bg-stone-50 hover:text-stone-900'
                  }`}
                >
                  {faq.category}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <section className="md:w-2/3 lg:w-3/4 flex flex-col gap-12">
          {/* Philosophy Insights Section */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-stone-200">
            <h2 className="text-2xl font-bold mb-4 text-stone-900">Training Philosophy Insights</h2>
            <p className="text-stone-600 mb-8 leading-relaxed">
              Before diving into specific questions, it is crucial to understand the foundation of our approach. Real-world
              reliability requires a balanced methodology and an understanding that behavioral modification takes time and
              consistency. Explore the visualizations below to see how we approach progress and conditioning.
            </p>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {/* Progress Chart */}
              <div className="flex flex-col bg-stone-50 p-4 rounded-lg border border-stone-200">
                <h3 className="font-bold text-center mb-2 text-stone-800">The Path to Reliability</h3>
                <p className="text-xs text-center text-stone-500 mb-4">&quot;Rehabilitation is not a linear process.&quot;</p>
                <div className="relative w-full h-64 md:h-80">
                  <ProgressChart />
                </div>
              </div>

              {/* Quadrant Chart */}
              <div className="flex flex-col bg-stone-50 p-4 rounded-lg border border-stone-200">
                <h3 className="font-bold text-center mb-2 text-stone-800">Balanced Operant Conditioning</h3>
                <p className="text-xs text-center text-stone-500 mb-4">&quot;Utilizing all four quadrants.&quot;</p>
                <div className="relative w-full h-64 md:h-80">
                  <QuadrantChart />
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-stone-900 mb-2">{currentCategory.category}</h2>
              <p className="text-stone-600 leading-relaxed">{currentCategory.desc}</p>
            </div>

            <div className="flex flex-col gap-4">
              {currentCategory.questions.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-stone-50 focus:outline-none"
                  >
                    <span className="font-semibold text-lg text-stone-800 pr-4">{item.q}</span>
                    <span className="text-amber-700 font-bold text-xl flex-shrink-0">
                      {openAccordionIndex === idx ? <Minus size={24} /> : <Plus size={24} />}
                    </span>
                  </button>

                  {openAccordionIndex === idx && (
                    <div className="bg-stone-50 px-6 py-5 border-t border-stone-100">
                      <p className="text-stone-700 leading-relaxed">
                        {item.a.split('*').map((segment, i) =>
                          i % 2 === 0 ? (
                            <span key={i}>{segment}</span>
                          ) : (
                            <strong key={i}>{segment}</strong>
                          )
                        )}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-8 text-center text-sm border-t border-stone-800 mt-12">
        <p>Real-World Results. Transparent Communication. Professional Handling.</p>
      </footer>
    </main>
  );
}
