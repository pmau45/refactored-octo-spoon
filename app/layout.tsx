import type { Metadata } from 'next';
import '@fontsource/oswald/500.css';
import '@fontsource/oswald/700.css';
import '@fontsource/chivo/300.css';
import '@fontsource/chivo/400.css';
import '@fontsource/chivo/700.css';
import SiteLayout from './components/SiteLayout';
import ErrorBoundary from './components/ErrorBoundary';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://axiomcanine.dev'),
  title: {
    default: 'Axiom Canine | Professional Dog Training — Jacksonville, FL',
    template: '%s | Axiom Canine',
  },
  description:
    'Axiom Canine — professional dog training in Jacksonville, FL. Behavior modification, off-leash obedience & free rescue support. Serving Ponte Vedra, Nocatee & St. Augustine.',
  keywords: [
    'dog training Jacksonville FL',
    'behavior modification dog Jacksonville',
    'advanced obedience training Jacksonville',
    'dog trainer Jacksonville FL',
    'Ponte Vedra dog training',
    'Nocatee dog training',
    'St. Augustine dog trainer',
    'reactive dog training Jacksonville',
    'off-leash obedience Jacksonville',
    'aggressive dog training Jacksonville',
    'rescue dog training Jacksonville',
    'puppy training Jacksonville FL',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Axiom Canine',
    title: 'Axiom Canine | Professional Dog Training — Jacksonville, FL',
    description:
      'Structure. Consistency. Results. Professional dog training for behavior modification, advanced obedience, and rescue adjustment in Jacksonville, FL.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Axiom Canine — Professional Dog Training Jacksonville FL',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Axiom Canine | Professional Dog Training',
    description: 'Structure. Consistency. Results. Jacksonville, FL dog training specialists.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

// JSON-LD structured data for local business
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://axiomcanine.dev',
  name: 'Axiom Canine',
  description:
    'Professional dog training in Jacksonville, FL specializing in behavior modification, advanced obedience, and free rescue adjustment support.',
  telephone: '+19044587561',
  url: 'https://axiomcanine.dev',
  image: 'https://axiomcanine.dev/og-image.png',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jacksonville',
    addressRegion: 'FL',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Jacksonville', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'City', name: 'Ponte Vedra Beach', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'City', name: 'Nocatee', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'City', name: 'St. Augustine', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'County', name: 'Nassau County', containedInPlace: { '@type': 'State', name: 'Florida' } },
  ],
  priceRange: '$$',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Dog Training Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Behavior Modification',
          description:
            'Rehabilitation for reactivity, aggression, and resource guarding. We address the root cause of dangerous behaviors in Jacksonville, FL dogs.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Advanced Obedience Training',
          description:
            'Build bulletproof recall, off-leash reliability, and public neutrality for dogs in Jacksonville, FL and surrounding areas.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Axiom Cares — Free Rescue & Adoption Support',
          description:
            'Free in-home visits for rescue and adoption adjustment in Jacksonville, FL. No judgment, no pressure, no bill.',
        },
      },
    ],
  },
  sameAs: [
    'https://www.facebook.com/axiomcanine',
    'https://www.instagram.com/axiomcanine',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-chivo antialiased overflow-x-hidden min-h-screen bg-[#0B0C10] text-[#C5C6C7]">
        {/* Skip to main content for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[#FF5E00] focus:text-[#050505] focus:px-4 focus:py-2 focus:font-bold"
        >
          Skip to main content
        </a>
        <ErrorBoundary>
          <SiteLayout>{children}</SiteLayout>
        </ErrorBoundary>
      </body>
    </html>
  );
}
