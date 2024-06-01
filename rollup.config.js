import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import packageJson from './package.json'
import scss from 'rollup-plugin-scss'

export default {
	input: 'src/index.ts',
	output: [
		{
			file: packageJson.module,
			format: 'esm',
			sourcemap: true,
		},
	],
	plugins: [
		peerDepsExternal(),
		resolve({
			extensions: ['.js', '.jsx', '.ts', '.tsx'],
		}),
		commonjs(),
		typescript({
			exclude: ['**/__tests__/*', '**/*.test.ts'],
			tsconfig: './tsconfig.json',
		}),
		scss({
			output: true, // Генерировать CSS файл
			output: 'dist/style.css', // Путь к выходному CSS файлу
			sass: require('sass'), // Подключение определенной версии Sass
			options: {
				outputStyle: 'compressed', // Настройки Sass
			},
		}),
	],
	external: ['react', 'react-dom'],
}
