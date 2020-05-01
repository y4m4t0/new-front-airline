import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RealAboutUsComponent } from './real-about-us/real-about-us.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      RegistrationComponent,
      HeaderComponent,
      FooterComponent,
      HomeComponent,
      RealAboutUsComponent,
      AdminComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      HttpClientModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
