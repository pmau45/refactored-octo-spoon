import type { MetadataRoute } from 'next';

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'https://axiomcanine.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const routes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/in-home-dog-training`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/services/board-and-train`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/services/group-classes`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/services/behavior-modification`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/advanced-obedience`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/training-issues/reactive-dog`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/training-issues/leash-pulling`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/training-issues/aggression`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/community`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  return routes;
}
