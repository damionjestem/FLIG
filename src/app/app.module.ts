import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { MaincontainerComponent } from './maincontainer/maincontainer.component';
import { FormComponent } from './form/form.component';
import { PreviewComponent } from './preview/preview.component';
import { FlickrService } from './flickr.service';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    MaincontainerComponent,
    FormComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    FlickrService,
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
