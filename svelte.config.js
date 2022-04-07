import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			server: {
				hmr: {
					clientPort: process.env.HRM_HOST ? 443 : 3000,
					host: process.env.HRM_HOST
						? process.env.HRM_HOST.substring('https://'.length)
						: 'localhost'
				}
			}
		}
	}
};

export default config;
