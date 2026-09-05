import { createHash } from 'node:crypto';
import { defineConfig, devices } from '@playwright/test';

const worktreeHash = createHash('sha256').update(process.cwd()).digest('hex');
const defaultPort = 4200 + (Number.parseInt(worktreeHash.slice(0, 4), 16) % 1000);
const port = Number(process.env.E2E_PORT ?? defaultPort);
const baseURL = `http://127.0.0.1:${port}`;

export default defineConfig({
	testDir: './e2e',
	fullyParallel: true,
	forbidOnly: Boolean(process.env.CI),
	retries: process.env.CI ? 1 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: 'line',
	use: {
		baseURL,
		trace: 'on-first-retry',
		screenshot: 'only-on-failure',
	},
	projects: [
		{
			name: 'desktop-chromium',
			use: { ...devices['Desktop Chrome'] },
		},
		{
			name: 'mobile-chromium',
			use: { ...devices['Pixel 5'] },
		},
	],
	webServer: {
		command: `npm run preview -- --host 127.0.0.1 --port ${port}`,
		url: `${baseURL}/home`,
		reuseExistingServer: false,
	},
});
