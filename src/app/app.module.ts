import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProjectsModule} from './modules/projects/projects.module';
import {AboutModule} from './modules/about/about.module';
import {ResumeModule} from './modules/resume/resume.module';
import {HomeModule} from './modules/home/home.module';
import {ComponentsModule} from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AboutModule,
    ResumeModule,
    ProjectsModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
