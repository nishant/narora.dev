import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { SocialMediaBarComponent } from './social-media-bar/social-media-bar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SocialMediaBarComponent,
    NavbarComponent,
    CarouselComponent
  ],
  exports: [
    NavbarComponent,
    CarouselComponent,
    NavbarComponent,
    SocialMediaBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
