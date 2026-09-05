import { expect, test } from '@playwright/test';

test('the production home page renders and remains interactive', async ({ page }, testInfo) => {
	const browserErrors = [];
	page.on('pageerror', (error) => browserErrors.push(error.message));
	page.on('console', (message) => {
		if (message.type() === 'error') browserErrors.push(message.text());
	});

	await page.goto('/home');
	await expect(page.getByText('Go Beyond Immersion')).toBeVisible();

	if (testInfo.project.name === 'mobile-chromium') {
		await page.getByRole('button', { name: 'Open navigation' }).click();
	}
	await expect(page.getByRole('link', { name: 'Team' })).toBeVisible();

	const firstQuestion = page.getByRole('button', { name: 'What does Shenanigan do?' });
	await firstQuestion.click();
	await expect(firstQuestion).toHaveAttribute('aria-expanded', 'true');

	expect(browserErrors, browserErrors.join('\n')).toEqual([]);
});

test('an unknown route renders the fallback', async ({ page }) => {
	await page.goto('/missing');
	await expect(page.getByText('Not Found')).toBeVisible();
});
