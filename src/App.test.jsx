import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import App from './App';

vi.mock('./contexts/AuthContext', () => ({
  useAuth: () => ({
    appIsReady: true,
    currentUser: null,
    login: vi.fn(),
    signInWithGoogle: vi.fn(),
    signInWithTwitter: vi.fn(),
    signInWithGitHub: vi.fn(),
  }),
}));

test('zeigt die Anmeldung für nicht angemeldete Benutzer', async () => {
  render(<App />);
  expect(await screen.findByRole('heading', { name: 'Expensee' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
});
