import { resolve } from 'path'
import { sync } from 'glob'

export default {
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: sync(resolve(__dirname, 'src/**/*.html'))
    }
  }
}