import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { IconGalleryComponent } from './components/icon-gallery/icon-gallery.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [ButtonComponent, IconGalleryComponent],
  exports: [ButtonComponent, FontAwesomeModule],
})
export class PocDocStorybookModule {}
