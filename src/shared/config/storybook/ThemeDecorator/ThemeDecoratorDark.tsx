import { type Decorator } from '@storybook/react'

export const ThemeDecoratorDark: Decorator = (StoryComponent) => {
  return (
                <div className={'app dark'}>
                    <StoryComponent/>
                </div>
  )
}
