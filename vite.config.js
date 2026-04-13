import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { prerender } from 'vite-plugin-prerender'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_PUBLIC_BASE_PATH || '/',
  plugins: [
    react(),
    prerender({
      renderer: '@prerenderer/renderer-jsdom',
      routes: [
        '/',
        '/qui-sommes-nous',
        '/assistance',
        '/services-entreprises',
        '/faq',
        '/contact',
        '/service/pompes-funebres-musulmanes',
        '/service/pompes-funebres-non-musulmanes',
        '/service/fleurs',
        '/service/nettoyage-fleurissement',
        '/produits/plaques',
        '/produits/cercueils-musulmans',
        '/produits/cercueils-non-musulmans',
        '/produits/marbrerie-musulmane',
        '/produits/marbrerie-non-musulmane',
        '/villes/agadir',
        '/villes/casablanca',
        '/villes/dakhla',
        '/villes/fes',
        '/villes/laayoune',
        '/villes/marrakech',
        '/villes/meknes',
        '/villes/nador',
        '/villes/ouarzazate',
        '/villes/oujda',
        '/villes/rabat',
        '/villes/tanger',
        '/villes/tetouan',
      ],
    }),
  ],
})
