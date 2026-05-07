import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.havaku.com';
  const appDirectory = path.join(process.cwd(), 'src/app');
  
  // Recursive function to get all page routes
  const getRoutes = (dir: string, baseRoute = ''): string[] => {
    const routes: string[] = [];
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        // Skip internal/admin/private folders
        if (
          item.startsWith('_') || 
          item.startsWith('(') || 
          item === 'api' || 
          item === 'admin' ||
          item === 'components' ||
          item === 'utils' ||
          item.includes('[') // Skip dynamic routes for now if they need special handling
        ) {
          continue;
        }

        const currentRoute = baseRoute ? `${baseRoute}/${item}` : item;
        
        // Check if this directory has a page.tsx or page.js
        if (fs.existsSync(path.join(fullPath, 'page.tsx')) || fs.existsSync(path.join(fullPath, 'page.js'))) {
          routes.push(currentRoute);
        }

        // Recursively find nested routes
        routes.push(...getRoutes(fullPath, currentRoute));
      }
    }

    return routes;
  };

  // Get all routes starting from src/app
  const dynamicRoutes = getRoutes(appDirectory);
  
  // Base entries
  const entries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];

  // Map directory routes to sitemap entries
  dynamicRoutes.forEach((route) => {
    // Determine priority based on route depth or importance
    let priority = 0.8;
    if (route.includes('contact') || route.includes('about')) {
      priority = 0.5;
    } else if (route.split('/').length > 1) {
      priority = 0.6;
    }

    entries.push({
      url: `${baseUrl}/${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority,
    });
  });

  return entries;
}
