import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {BrowserAnimationsModule}  from "@angular/platform-browser/animations"
import { MatNativeDateModule } from '@angular/material/core';
import { AdminComponent } from './admin/admin.component';
import { SimpleUserComponent } from './simple-user/simple-user.component';
@NgModule({
  declarations: [
    AppComponent, AdminComponent, SimpleUserComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,FormsModule,BrowserAnimationsModule,MatNativeDateModule,
    AppRoutingModule,MatDatepickerModule,MatFormFieldModule,ReactiveFormsModule,MatInputModule

  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
