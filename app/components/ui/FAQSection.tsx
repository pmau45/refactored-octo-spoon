'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
}

export function FAQSection({ items, title = 'Frequently Asked Questions' }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="space-y-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-8 md:p-12">
      {title && <h2 className="text-3xl font-bold text-slate-900 mb-8">{title}</h2>}

      <div className="space-y-4">
        {items.map((item, index) => (
          <details
            key={index}
            className="group border border-slate-200 rounded-lg bg-white hover:shadow-md transition-shadow"
            open={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <summary className="cursor-pointer px-6 py-4 font-semibold text-slate-900 flex items-center justify-between hover:text-orange-600">
              <span>{item.question}</span>
              <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
            </summary>
            <div className="px-6 py-4 border-t border-slate-200 text-slate-700 leading-relaxed">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

// JSON-LD FAQPage Schema Generator
export function FAQSchema({ items }: { items: FAQItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
