import { Story, Meta } from '@storybook/react/types-6-0'
import Skills from '.'

export default {
  title: 'Skills',
  component: Skills
} as Meta

export const Basic: Story = ({ ...args }) => <Skills {...args} />
