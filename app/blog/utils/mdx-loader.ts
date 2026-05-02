import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ArticleMetadata {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: 'Training Tips' | 'Behavior Insights' | 'Philosophy' | 'Technique Breakdowns';
  readTime: number;
  heroImage: string;
  slug: string;
}

export interface Article extends ArticleMetadata {
  content: string;
}

const ARTICLES_DIR = path.join(process.cwd(), 'app/blog/content');

export function getAllArticles(): Article[] {
  const files = fs.readdirSync(ARTICLES_DIR).filter((file) => file.endsWith('.mdx'));

  return files
    .map((file) => {
      const filePath = path.join(ARTICLES_DIR, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);

      return {
        slug: file.replace('.mdx', ''),
        title: data.title || 'Untitled',
        excerpt: data.excerpt || '',
        date: data.date || new Date().toISOString().split('T')[0],
        author: data.author || 'Axiom Canine',
        category: data.category || 'Training Tips',
        readTime: data.readTime || calculateReadTime(content),
        heroImage: data.heroImage || '/images/blog-default.jpg',
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(slug: string): Article | null {
  const articles = getAllArticles();
  return articles.find((article) => article.slug === slug) || null;
}

export function getArticlesByCategory(category: ArticleMetadata['category']): Article[] {
  return getAllArticles().filter((article) => article.category === category);
}

export function getRelatedArticles(slug: string, limit = 3): Article[] {
  const article = getArticleBySlug(slug);
  if (!article) return [];

  return getAllArticles()
    .filter((a) => a.slug !== slug && a.category === article.category)
    .slice(0, limit);
}

function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export const CATEGORIES: ArticleMetadata['category'][] = [
  'Training Tips',
  'Behavior Insights',
  'Philosophy',
  'Technique Breakdowns',
];
