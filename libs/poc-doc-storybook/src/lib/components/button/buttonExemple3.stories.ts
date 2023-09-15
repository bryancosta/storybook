 
import { ArgsTable } from '@storybook/addon-docs';
import { ButtonComponent } from './button.component';import { Story, Meta } from '@storybook/angular';

export default {
  title: 'MyComponent',
  component: ButtonComponent,
  argTypes: {
    // Define your component's props here
    inputProp1: {
      control: { type: 'text' },
      description: 'Description for inputProp1',
    },
    inputProp2: {
      control: { type: 'number' },
      description: 'Description for inputProp2',
    },
    // Add more input properties as needed
  },
} as Meta;
const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
