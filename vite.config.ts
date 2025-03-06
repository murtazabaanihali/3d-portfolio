import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        react(),
        tailwindcss()
    ],
    server: {
        proxy: {
            "/tk.js": {
                target: "https://dheon-stats.vercel.app",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/tk.js/, '/x.js'),
            },
            "/api/send": {
                target: "https://dheon-stats.vercel.app",
                changeOrigin: true,
            },
        },
    },
});