import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import { SocialMediaBarComponent } from './social-media-bar/social-media-bar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SocialMediaBarComponent
  ],
  exports: [
    NavbarComponent,
    SocialMediaBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
