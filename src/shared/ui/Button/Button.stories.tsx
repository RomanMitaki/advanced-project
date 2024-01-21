import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonTheme } from './Button'
import { ThemeDecoratorDark } from 'shared/config/storybook/ThemeDecorator/ThemeDecoratorDark'

const meta = {
  title: 'shared/Button',
  component: Button
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Text'
  }
}

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR
  }
}

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE
  }
}
Outline.decorators = [ThemeDecoratorDark]
