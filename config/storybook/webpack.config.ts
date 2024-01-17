import type webpack from 'webpack'
import { type RuleSetRule } from 'webpack'
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
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    // eslint-disable-next-line @typescript-eslint/prefer-includes
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i }
    }
    return rule
  })
  // @ts-expect-error it's ok
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack']
  })
  // @ts-expect-error it's ok
  config.module.rules.push(buildCssLoader(true))
  return config
}
