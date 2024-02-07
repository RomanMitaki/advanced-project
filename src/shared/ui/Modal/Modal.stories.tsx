import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from 'shared/ui/Modal/Modal'
import { ThemeDecoratorDark } from 'shared/config/storybook/ThemeDecorator/ThemeDecoratorDark'

const meta = {
  title: 'shared/Modal',
  component: Modal
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof Modal>

export const Primary: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis cupiditate ducimus eaque ipsa ipsum maxime necessitatibus, nisi non nulla, numquam porro quis recusandae sint sit suscipit voluptatem.'
  }
}

export const Dark: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis cupiditate ducimus eaque ipsa ipsum maxime necessitatibus, nisi non nulla, numquam porro quis recusandae sint sit suscipit voluptatem.'
  }
}
Dark.decorators = [ThemeDecoratorDark]
