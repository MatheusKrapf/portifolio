import { Story, Meta } from '@storybook/react/types-6-0'
import HeroBanner from '.'

export default {
  title: 'HeroBanner',
  component: HeroBanner
} as Meta

export const Basic: Story = ({ ...args }) => <HeroBanner {...args} />
