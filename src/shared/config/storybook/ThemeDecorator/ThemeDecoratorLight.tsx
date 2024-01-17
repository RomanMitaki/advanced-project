import { type Decorator } from '@storybook/react'

export const ThemeDecoratorLight: Decorator = (StoryComponent) => {
  return (
        <div className={'app light'}>
            <StoryComponent/>
            </div>
  )
}
