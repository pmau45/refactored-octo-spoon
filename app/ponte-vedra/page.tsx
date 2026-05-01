import type { Metadata } from 'next';
import { FAQSection, FAQSchema } from '@/app/components/ui/FAQSection';
import OpenModalButton from '@/app/components/forms/OpenModalButton';
import { StaggerContainer } from '@/app/components/animations/StaggerContainer';
import AnimatedSection from '@/app/components/animations/AnimatedSection';

export const metadata: Metadata = {
  title: 'Dog Training in Ponte Vedra, FL | Axiom Canine',
  description:
    'Professional dog training serving Ponte Vedra Beach. Behavior modification, obedience training, and rescue support. Call (904) 458-7561.',
  keywords: [
    'dog training Ponte Vedra',
    'dog trainer Ponte Vedra Beach',
    'behavior modification Ponte Vedra',
    'obedience training Ponte Vedra',
  ],
  openGraph: {
    title: 'Dog Training in Ponte Vedra, FL | Axiom Canine',
    description: 'Professional dog training serving Ponte Vedra Beach, FL',
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'Do you offer training services in Ponte Vedra Beach?',
    answer:
      'Yes! Axiom Canine serves the Ponte Vedra Beach area with in-home training, group classes, and board & train programs. We come to you for initial consultations and ongoing training sessions.',
  },
  {
    question: 'What areas of Ponte Vedra do you serve?',
    answer:
      'We service all of Ponte Vedra Beach including Ponte Vedra Isles, Palencia, and surrounding neighborhoods. We also serve Nocatee, St. Augustine, Jacksonville, and Nassau County.',
  },
  {
    question: 'How long does training typically take?',
    answer:
      'Timeline varies by dog and training goals. Behavior modification typically takes 4-12 weeks with consistent weekly sessions. Obedience training can take 6-8 weeks. We create customized plans during your free consultation.',
  },
  {
    question: 'Do you offer free rescue support?',
    answer:
      'Yes! Our Axiom Cares program provides free in-home visits for newly adopted or rescued dogs in the Ponte Vedra area to help with adjustment and early training. No judgment, no pressure, no bill.',
  },
  {
    question: 'What training methods do you use?',
    answer:
      'We use science-based, positive reinforcement training methods combined with structure and consistency. We address the root causes of behavioral issues, not just symptoms. Our philosophy is Structure. Consistency. Results.',
  },
];

export default function PonteVedraTrainingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Dog Training in Ponte Vedra Beach, FL</h1>
          <p className="text-xl text-slate-200 mb-8">
            Professional behavior modification and obedience training for Ponte Vedra families
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <OpenModalButton>Free Consultation</OpenModalButton>
            <a
              href="tel:+19044587561"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              (904) 458-7561
            </a>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Axiom Canine for Ponte Vedra?</h2>
        <StaggerContainer>
          <div className="grid md:grid-cols-3 gap-6">
            <AnimatedSection>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h3 className="font-bold text-xl text-slate-900 mb-3">Local Expertise</h3>
                <p className="text-slate-700">
                  Serving Ponte Vedra Beach for years. We understand the community and your dogs&apos; unique needs.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h3 className="font-bold text-xl text-slate-900 mb-3">In-Home Training</h3>
                <p className="text-slate-700">
                  We come to your Ponte Vedra home. Train in the environment where your dog spends most time.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h3 className="font-bold text-xl text-slate-900 mb-3">Free Rescue Support</h3>
                <p className="text-slate-700">
                  Axiom Cares offers free in-home visits for rescue and adopted dogs in Ponte Vedra.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </StaggerContainer>
      </section>

      {/* Services Overview */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Training Services in Ponte Vedra</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Behavior Modification</h3>
              <p className="text-slate-700 mb-4">
                Address reactivity, aggression, anxiety, and other behavioral challenges through science-based training.
              </p>
              <a href="/behavior" className="text-orange-600 hover:text-orange-700 font-semibold">
                Learn more →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Advanced Obedience</h3>
              <p className="text-slate-700 mb-4">
                Build bulletproof recall, off-leash reliability, and public neutrality for your dog.
              </p>
              <a href="/obedience" className="text-orange-600 hover:text-orange-700 font-semibold">
                Learn more →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Axiom Cares — Free Rescue Support</h3>
              <p className="text-slate-700 mb-4">
                Free in-home visits for newly adopted dogs in Ponte Vedra. Help with adjustment, basic training, and behavior assessment.
              </p>
              <a href="/community" className="text-orange-600 hover:text-orange-700 font-semibold">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <FAQSection items={faqItems} title="Dog Training FAQs for Ponte Vedra" />
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Dog?</h2>
          <p className="text-lg mb-6">Schedule your free consultation today. Serving Ponte Vedra Beach and surrounding areas.</p>
          <OpenModalButton className="bg-white text-orange-600 hover:bg-slate-100">Schedule Consultation</OpenModalButton>
        </div>
      </section>

      {/* Schema */}
      <FAQSchema items={faqItems} />
    </main>
  );
}
