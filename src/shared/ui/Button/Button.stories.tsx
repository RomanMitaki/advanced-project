import type { Meta, StoryObj } from '@storybook/react'
import { Button, ThemeButton } from './Button'
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
    theme: ThemeButton.CLEAR
  }
}

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE
  }
}
Outline.decorators = [ThemeDecoratorDark]
