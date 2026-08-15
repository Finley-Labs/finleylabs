import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const getBasePath = () => {
  if (process.env.GITHUB_REPOSITORY) {
    const repoName = process.env.GITHUB_REPOSITORY.split('/')[1];
    return `/${repoName}/`;
  }
  return '/';
};

const getSite = () => {
  if (process.env.GITHUB_REPOSITORY) {
    const owner = process.env.GITHUB_REPOSITORY.split('/')[0];
    return `https://${owner}.github.io`;
  }
  return 'http://localhost:4321';
};

// https://astro.build/config
export default defineConfig({
  site: getSite(),
  base: getBasePath(),
  integrations: [sitemap()],
});
