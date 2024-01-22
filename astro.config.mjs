import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Zed',
			logo: {
				dark: './src/assets/zed-logo.webp',
				light: './src/assets/zed-logo-dark.png'
			},
			favicon: '/favicon.png',
			social: {
				github: 'https://github.com/zed-industries/community',
			},
			sidebar: [
				{
					label: 'General',
					autogenerate: { directory: 'general' }
				},
				{
					label: 'Configuration',
					autogenerate: { directory: 'configuration' }
				},
				{
					label: 'Languages',
					autogenerate: { directory: 'languages' }
				},
				{
					label: 'Community',
					autogenerate: { directory: 'community' }
				}
			],
			lastUpdated: true,
			editLink: { baseUrl: 'https://github.com/Moshyfawn/docs/edit/main/' },
			locales: {
				root: {
					label: 'English',
					lang: 'en'
				}
			}
		}),
	],
});
