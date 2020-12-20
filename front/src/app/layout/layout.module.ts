import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, BodyComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, BodyComponent, FooterComponent],
})
export class LayoutModule {}
