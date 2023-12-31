import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Omega help',
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Getting started', link: '/guides/getting-started/' },
          ],
        },
        {
          label: 'Assignments',
          autogenerate: { directory: 'assignments' },
        },
        {
          label: 'Companies',
          autogenerate: { directory: 'companies' },
        },
      ],
    }),
  ],
});
