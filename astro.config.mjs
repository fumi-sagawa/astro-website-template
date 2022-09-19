import { defineConfig } from 'astro/config'
// import react from '@astrojs/react';

import svelte from '@astrojs/svelte'

// https://astro.build/config
export default defineConfig({
  // integrations: [react(), svelte()]
  integrations: [svelte()],
  //ファイルごとに@useする手間を省こうとしたが失敗
  //scssファイルの前に挿入する動作になるため自己参照して循環してしまう様子
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: `@use 'src/styles' as *;`,
  //       },
  //     },
  //   },
  // },
})
