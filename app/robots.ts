import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/_next/',
        '/admin/',
        '/private/',
        '/*.json',
        '/*.xml',
      ],
    },
    sitemap: 'https://www.oxalya.info/sitemap.xml',
    host: 'https://www.oxalya.info',
  }
} 