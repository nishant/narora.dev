import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { SocialMediaBarComponent } from './social-media-bar/social-media-bar.component';
import { WorkExperienceComponent } from './navbar/work-experience/work-experience.component';



@NgModule({
  declarations: [
    NavbarComponent,
    WorkExperienceComponent,
    SocialMediaBarComponent,
    CarouselComponent
  ],
  exports: [
    NavbarComponent,
    WorkExperienceComponent,
    CarouselComponent,
    SocialMediaBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule { }
