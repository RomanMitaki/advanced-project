import type webpack from 'webpack'
import { type BuildPaths } from '../build/types/config'
import path from 'path'
import { buildCssLoader } from '../build/loaders/buildCssLoader'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }
  // @ts-expect-error it's ok
  config.resolve.modules.push(paths.src)
  // @ts-expect-error it's ok
  config.resolve.extensions.push('.ts', '.tsx')
  // @ts-expect-error it's ok
  config.module.rules.push(buildCssLoader(true))
  return config
}
