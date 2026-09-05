import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { expect, test } from 'vitest';
import { AppRoutes } from './App';

function renderRoute(path) {
	render(
		<MemoryRouter initialEntries={[path]}>
			<AppRoutes />
		</MemoryRouter>,
	);
}

test('renders the home experience', () => {
	renderRoute('/home');
	expect(screen.getByText('Go Beyond Immersion')).toBeInTheDocument();
});

test('renders the fallback for an unknown route', () => {
	renderRoute('/missing');
	expect(screen.getByText('Not Found')).toBeInTheDocument();
});
