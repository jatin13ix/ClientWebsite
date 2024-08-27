import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/clientWebsite/', // Ensure this matches your GitHub repo name
  plugins: [react()],
});
