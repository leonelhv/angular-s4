import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    BodyComponent,
    FooterComponent,
    AsideComponent,
    FormComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [HeaderComponent, BodyComponent, FooterComponent],
})
export class ComponentsModule {}
