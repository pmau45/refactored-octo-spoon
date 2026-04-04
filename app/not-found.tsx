import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for could not be found.',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0C10] text-[#C5C6C7] px-4">
      <div className="text-center">
        <p className="font-oswald text-[#FF5E00] text-9xl font-bold tracking-widest mb-4" aria-hidden="true">
          404
        </p>
        <h1 className="font-oswald text-3xl md:text-4xl uppercase tracking-widest text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-[#C5C6C7] mb-10 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. Head back to the homepage or give us
          a call.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="btn-rugged inline-block font-oswald uppercase tracking-widest text-[#050505] bg-[#FF5E00] px-8 py-4 border-2 border-[#FF5E00]"
            aria-label="Return to Axiom Canine homepage"
          >
            Back to Home
          </Link>
          <a
            href="tel:9044587561"
            className="font-oswald uppercase tracking-widest text-[#FF5E00] border border-[#FF5E00] px-8 py-4 hover:bg-[#FF5E00] hover:text-[#050505] transition-colors inline-block"
            aria-label="Call Axiom Canine at (904) 458-7561"
          >
            (904) 458-7561
          </a>
        </div>
      </div>
    </div>
  );
}
