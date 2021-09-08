import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import importElementPlus from 'vite-plugin-element-plus'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    importElementPlus({
      useSource: true
    })
  ],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
      '@': `${path.resolve(__dirname, 'src')}`,
      '@components/': `${path.resolve(__dirname, 'src/components')}/`,
      '@components': `${path.resolve(__dirname, 'src/components')}`
    }
  }
})
