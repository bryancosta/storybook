import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-icon-gallery',
  templateUrl: './icon-gallery.component.html',
  styleUrls: ['./icon-gallery.component.css'],
})
export class IconGalleryComponent {
  @Input() icons: string[] = [];
}
