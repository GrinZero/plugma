import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import path from "path";
import { fileURLToPath } from 'url';
import viteCopyDirectoryPlugin from './vite-plugin-copy-dir.js';
// import svgLoader from "vite-svg-loader";

const CURR_DIR = process.cwd();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log(path.resolve(CURR_DIR, 'src'))

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		viteSingleFile(),
		viteCopyDirectoryPlugin({
			sourceDir: 'dist/node_modules/plugma/',
			targetDir: 'dist/',
		}),
		// svgLoader({
		//     defaultImport: "raw", // or 'raw'
		// }),
	],
	// root: path.resolve(CURR_DIR, 'src'),
	build: {
		// outDir: "../dist",
		rollupOptions: {
			input: "node_modules/plugma/index.html",
		},
	},

});
