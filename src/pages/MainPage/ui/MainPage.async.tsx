import { lazy } from 'react'

export const MainPageAsync = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error  // ТАК В РЕАЛЬНОСТИ ДЕЛАТЬ НЕ НУЖНО!
  setTimeout(() => { resolve(import('./MainPage')) }, 1500)
}))
