import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  argTypes: {
    title: {
      name: 'title',
      description: 'Alteração do título do componente',
      defaultValue: 'Teste example title'
    },
    description: {
      name: 'description',
      description: 'Alteração da descrição do componente',
      defaultValue: 'Teste example description'
    }
  }
} as Meta

export const Basic: Story = ({ ...args }) => <Main {...args} />
