import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { RealAboutUsComponent } from './real-about-us/real-about-us.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {path: ``, redirectTo: '/home', pathMatch: 'full'},
  {path: 'contacts', component: ContactsComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'join-us', component: AboutUsComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: RealAboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
