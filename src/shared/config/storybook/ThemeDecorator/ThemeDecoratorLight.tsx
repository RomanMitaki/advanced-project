import { type Decorator } from '@storybook/react'
import { ThemeProvider } from 'app/providers/ThemeProvider'

export const ThemeDecoratorLight: Decorator = (StoryComponent) => {
  return (
      <ThemeProvider>
          <div className={'app light'}>
              <StoryComponent/>
          </div>
      </ThemeProvider>

  )
}
