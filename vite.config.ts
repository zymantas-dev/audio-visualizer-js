import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

export default defineConfig(({ mode }) => ({
  plugins: [
    svgr({
      include: '**/*.svg',
      svgrOptions: {
        exportType: 'named',
        namedExport: 'ReactComponent',
      },
    }),
  ],
  resolve: {
    alias: {
      assets: fileURLToPath(new URL('./src/assets', import.meta.url)),
      components: fileURLToPath(new URL('./src/components', import.meta.url)),
      models: fileURLToPath(new URL('./src/models', import.meta.url)),
      store: fileURLToPath(new URL('./src/store', import.meta.url)),
      styles: fileURLToPath(new URL('./src/styles', import.meta.url)),
      utils: fileURLToPath(new URL('./src/utils', import.meta.url)),
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode),
  },
}))
