import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import process from "process/browser.js";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    define: {
        'process.env': process.env
    }
})

