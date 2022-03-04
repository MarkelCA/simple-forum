import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from '../components/header/header.component'
import {MaterialModule} from '../modules/material/material.module';
import {PostsModule} from "../modules/posts/posts.module";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    PostsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
