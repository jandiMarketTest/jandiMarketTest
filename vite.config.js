import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cart: resolve(__dirname, '/src/pages/cart/'),
        login: resolve(__dirname, '/src/pages/login/'),
        register: resolve(__dirname, '/src/pages/register/'),
        productList: resolve(__dirname, '/src/pages/productList/'),
        productDetail: resolve(__dirname, '/src/pages/productDetail/'),
      },
    },
  },
});
