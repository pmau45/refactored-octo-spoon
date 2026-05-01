import type { Metadata } from 'next';
import { TrainingPhilosophyDashboard } from '@/app/components/dashboard/TrainingPhilosophyDashboard';

export const metadata: Metadata = {
  title: 'Training Philosophy & Interactive FAQ | Axiom Canine',
  description:
    'Explore Axiom Canine\'s canine behavioral rehabilitation philosophy, training methods, and answers to common questions. Behavioral reliability through science-based training.',
  keywords: [
    'dog training philosophy',
    'behavioral rehabilitation',
    'canine training methods',
    'operant conditioning',
    'off-leash training',
  ],
};

export default function TrainingPhilosophyPage() {
  return <TrainingPhilosophyDashboard />;
}
