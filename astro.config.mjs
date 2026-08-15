import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';

const getBasePath = () => {
  if (fs.existsSync('./CNAME') || fs.existsSync('./public/CNAME')) {
    return '/';
  }
  if (process.env.GITHUB_REPOSITORY) {
    const repoName = process.env.GITHUB_REPOSITORY.split('/')[1];
    return `/${repoName}/`;
  }
  return '/';
};

const getSite = () => {
  let domain = '';
  if (fs.existsSync('./CNAME')) {
    domain = fs.readFileSync('./CNAME', 'utf-8').trim();
  } else if (fs.existsSync('./public/CNAME')) {
    domain = fs.readFileSync('./public/CNAME', 'utf-8').trim();
  }

  if (domain) {
    return `https://${domain}`;
  }

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
