import type { Metadata } from 'next';
import { MapPin, Radio, Anchor, ArrowRight } from 'lucide-react';
import OpenModalButton from '../components/forms/OpenModalButton';
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerContainer';

export const metadata: Metadata = {
  title: 'Advanced Obedience',
  description:
    'Off-leash obedience training in Jacksonville, FL. Axiom Canine builds bulletproof recall, public neutrality & real-world reliability — commands that hold up anywhere.',
  alternates: {
    canonical: '/obedience',
  },
};

const obedienceServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Advanced Dog Obedience Training',
  description:
    'Off-leash reliability, bulletproof recall, and public neutrality training',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Axiom Canine',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Jacksonville',
      state: 'FL',
    },
  ],
  serviceType: 'Dog Training',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    price: 'Contact for quote',
    availability: 'https://schema.org/InStock',
  },
};

export default function ObediencePage() {
  return (
    <div className="page-enter">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(obedienceServiceJsonLd) }}
      />
      {/* ── Hero ──────────────────────────────────────── */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center pt-20 clip-slant pb-24 overflow-hidden bg-gradient-to-bl from-[#7A8B66]/10 via-[#050505] to-[#050505]"
        aria-labelledby="obedience-hero-heading"
      >
        <div className="absolute inset-0 bg-texture opacity-30 pointer-events-none z-0" aria-hidden="true" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <h1
            id="obedience-hero-heading"
            className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-tight leading-[1] mb-6 text-white drop-shadow-2xl"
          >
            Absolute Control.{' '}
            <span className="text-[#7A8B66]">Anywhere.</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-[#C5C6C7] leading-relaxed">
            A dog that only listens in your living room isn&apos;t trained. True obedience means
            public neutrality, off-leash reliability, and immediate recall under intense
            distractions.
          </p>
        </div>
      </section>

      {/* ── Skills ────────────────────────────────────── */}
      <section
        className="py-24 bg-[#0B0C10] border-b border-[#1A2030] relative"
        aria-labelledby="skills-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="skills-heading" className="sr-only">
            Obedience Skills We Develop
          </h2>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                Icon: MapPin,
                title: 'Public Neutrality',
                body: 'Ignoring other dogs, people, and urban chaos. Existing calmly in high-traffic environments.',
              },
              {
                Icon: Radio,
                title: 'Bulletproof Recall',
                body: 'Coming back immediately, the first time, every time, regardless of what they are chasing.',
              },
              {
                Icon: Anchor,
                title: 'Extended Place',
                body: 'Holding a designated boundary (a bed or cot) for extended periods until released.',
              },
            ].map(({ Icon, title, body }) => (
              <StaggerItem key={title}>
                <div
                  className="bg-[#050505] p-8 border border-[#1A2030] text-center h-full"
                >
                  <Icon className="w-10 h-10 text-[#7A8B66] mx-auto mb-4" aria-hidden="true" />
                  <h3 className="font-oswald text-xl uppercase tracking-widest text-white mb-2">
                    {title}
                  </h3>
                  <p className="text-[#C5C6C7] text-sm">{body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section
        className="py-24 bg-[#050505] relative border-t border-[#1A2030]"
        aria-labelledby="obedience-cta-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="obedience-cta-heading"
            className="font-oswald text-4xl font-bold uppercase tracking-widest mb-4 text-[#7A8B66]"
          >
            Ready for Freedom?
          </h2>
          <p className="text-[#C5C6C7] text-lg mb-10">
            True obedience starts with a real evaluation.
          </p>
          <OpenModalButton
            className="btn-rugged bg-[#FF5E00] text-[#050505] font-oswald text-xl font-bold uppercase tracking-widest px-10 py-5 inline-flex items-center gap-3"
            ariaLabel="Request an advanced obedience assessment"
          >
            Request Assessment{' '}
            <ArrowRight className="w-6 h-6" aria-hidden="true" />
          </OpenModalButton>
        </div>
      </section>
    </div>
  );
}
