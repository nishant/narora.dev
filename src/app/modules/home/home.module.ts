import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {ComponentsModule} from '../../components/components.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
  ]
})
export class HomeModule { }
