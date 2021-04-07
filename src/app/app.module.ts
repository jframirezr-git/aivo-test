import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { HeaderComponent } from './_components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuButtonComponent } from './_components/menu-button/menu-button.component';
import { MenuComponent } from './_components/menu/menu.component';
import { AdminRoutingModule } from './app-client/admin-routing.module';
import { AuthRoutingModule } from './_auth/auth-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuButtonComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    AdminRoutingModule,
    AuthRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
