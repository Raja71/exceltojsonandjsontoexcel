import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ExportfileComponent } from './components/exportfile/exportfile.component';
import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    ExportfileComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,CommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
