//import { Meta, Story } from '@storybook/addon-docs';
import { Story, Meta,moduleMetadata  } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Button',
  decorators: [
    moduleMetadata({
      imports: [FontAwesomeModule],
    }),
  ],
};

export const withFontAwesomeIcon :Story<ButtonComponent> = () => ({
  template: `
    <button>
      <fa-icon [icon]="faCoffee"></fa-icon>
      Click me
    </button>
  `,
  props: {
    faCoffee, // This is where you assign your FontAwesome icon
  },
});

// export default {
//   title: 'Components/Actions/Button',
//   component: ButtonComponent,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// } as Meta;

// const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
//   props: args,
// });

// export const iconStory = () => ({
//   template: `
//       <button>
//         <fa-icon [icon]="homeIcon"></fa-icon>
//         Go Home
//       </button>
      
//       <button>
//         <fa-icon [icon]="closeIcon"></fa-icon>
//         Close
//       </button>
//   `,
//   // Provide the icons as props:
//   props: {
//     homeIcon: faHome,
//     closeIcon: faTimes,
//   },
// });

// /* export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// }; */
