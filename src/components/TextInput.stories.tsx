import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputIcon, TextInputRootProps } from './TextInput';
import { Envelope } from 'phosphor-react'

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInputIcon>
        <Envelope />
      </TextInputIcon>,
      <TextInput.Input placeholder="Type your e-email adress" />
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    }
  }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {

}
export const WhithouIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder="Type your e-email adress" />
  }
}



