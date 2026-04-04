import type { Metadata } from 'next';
import { AlertTriangle, ArrowRight } from 'lucide-react';
import OpenModalButton from '../components/OpenModalButton';

export const metadata: Metadata = {
  title: 'Behavior Modification',
  description:
    'Reactivity, aggression, and resource guarding don\'t fix themselves. Axiom Canine specializes in rehabilitating the dogs other trainers turn away in Jacksonville, FL.',
  alternates: {
    canonical: '/behavior',
  },
};

export default function BehaviorPage() {
  return (
    <div className="page-enter">
      {/* ── Hero ──────────────────────────────────────── */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center pt-20 clip-slant pb-24 overflow-hidden bg-gradient-to-br from-[#FF5E00]/10 via-[#050505] to-[#050505]"
        aria-labelledby="behavior-hero-heading"
      >
        <div className="absolute inset-0 bg-texture opacity-30 pointer-events-none z-0" aria-hidden="true" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <h1
            id="behavior-hero-heading"
            className="font-oswald text-5xl md:text-7xl font-bold uppercase tracking-tight leading-[1] mb-6 text-white drop-shadow-2xl"
          >
            Liability Becomes{' '}
            <span className="text-[#FF5E00]">Reliability.</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-[#C5C6C7] leading-relaxed">
            Reactivity, resource guarding, and aggression don&apos;t happen in a vacuum. We
            specialize in rehabilitating the dogs that other trainers turn away.
          </p>
        </div>
      </section>

      {/* ── Conditions We Address ─────────────────────── */}
      <section
        className="py-24 bg-[#0B0C10] border-b border-[#1A2030] relative"
        aria-labelledby="conditions-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <AlertTriangle className="w-16 h-16 text-[#FF5E00] mx-auto mb-6" aria-hidden="true" />
            <h2
              id="conditions-heading"
              className="font-oswald text-4xl font-bold uppercase tracking-widest text-[#7A8B66] mb-6"
            >
              Stop Managing. Start Leading.
            </h2>
            <p className="text-[#C5C6C7] text-lg leading-relaxed">
              Walking your dog shouldn&apos;t feel like navigating a minefield. Treating the symptom
              won&apos;t work. We must address their state of mind and structural boundaries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1A2030] p-10 border-l-4 border-[#FF5E00] shadow-lg">
              <h3 className="font-oswald text-2xl uppercase tracking-widest text-white mb-4">
                Leash Reactivity
              </h3>
              <p className="text-[#C5C6C7] leading-relaxed">
                Lunging, barking, and hyper-fixation on walks are signs of insecurity and a lack of
                leadership. We establish a structured walk where you are in control.
              </p>
            </div>
            <div className="bg-[#1A2030] p-10 border-l-4 border-[#FF5E00] shadow-lg">
              <h3 className="font-oswald text-2xl uppercase tracking-widest text-white mb-4">
                Resource Guarding
              </h3>
              <p className="text-[#C5C6C7] leading-relaxed">
                Protecting food, space, or owners is a dangerous liability. We implement strict,
                fair routines that safely reset the dynamic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section
        className="py-24 bg-[#050505] relative border-t border-[#1A2030]"
        aria-labelledby="behavior-cta-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="behavior-cta-heading"
            className="font-oswald text-4xl font-bold uppercase tracking-widest mb-4 text-[#7A8B66]"
          >
            Ready to Lead?
          </h2>
          <p className="text-[#C5C6C7] text-lg mb-10">
            Let&apos;s build a plan that actually works. We&apos;ll reach out within 24 hours.
          </p>
          <OpenModalButton
            className="btn-rugged bg-[#FF5E00] text-[#050505] font-oswald text-xl font-bold uppercase tracking-widest px-10 py-5 inline-flex items-center gap-3"
            ariaLabel="Request a behavior modification assessment"
          >
            Request Assessment{' '}
            <ArrowRight className="w-6 h-6" aria-hidden="true" />
          </OpenModalButton>
        </div>
      </section>
    </div>
  );
}
