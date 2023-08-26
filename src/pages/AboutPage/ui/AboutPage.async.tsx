import { lazy } from 'react'

export const AboutPageAsync = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error  ТАК В РЕАЛЬНОСТИ ДЕЛАТЬ НЕ НУЖНО!
  setTimeout(() => { resolve(import('./AboutPage')) }, 1500)
}))
