// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
// import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // output: 'server',
  // adapter: cloudflare(),
  redirects: {
    '/': {
      destination: '/multiplayer',
      status: 302,
    }
  },
  integrations: [
    starlight({
      title: 'LearnGame.dev',
      social: {
        github: 'https://github.com/muhajirdev/learn-game-dev',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', slug: 'guides/example' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
      customCss: ['./src/tailwind.css'],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
