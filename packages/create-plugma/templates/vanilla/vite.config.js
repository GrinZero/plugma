/** @type {import('vite').UserConfig} */

import baseConfig from 'plugma/lib/vite.config.js';
import { defineConfig } from "vite";
import { merge } from 'lodash';


export default defineConfig(
	merge(baseConfig, {

	})
);