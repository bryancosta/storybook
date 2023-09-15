import { Component, Input } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'storybook-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() title: string;
  @Input() primary: boolean;
  @Input() label: string;

  constructor() {
    this.label = 'button';
    this.title = '';
    this.primary = false;
  }
}
