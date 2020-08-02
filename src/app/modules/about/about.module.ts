import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import {ComponentsModule} from '../../components/components.module';


@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    ComponentsModule,
  ]
})
export class AboutModule { }
