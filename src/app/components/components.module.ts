import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import { WorkExperienceComponent } from './navbar/work-experience/work-experience.component';



@NgModule({
  declarations: [
    NavbarComponent,
    WorkExperienceComponent
  ],
  exports: [
    NavbarComponent,
    WorkExperienceComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule { }
