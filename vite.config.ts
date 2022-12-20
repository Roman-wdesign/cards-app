import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import type { UserConfig as VitestUserConfigInterface } from "vitest/config"

const vitestConfig: VitestUserConfigInterface = {
    test: {
        globals: true,
        environment: "jsdom",
    },
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), WindiCSS(),],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    test: vitestConfig.test,
})
